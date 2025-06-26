const Task = require('../models/Task');

// Получить все задачи
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при получении задач' });
  }
};

// Создать новую задачу
exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const newTask = new Task({ title });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ error: 'Ошибка при создании задачи' });
  }
};

// Обновить задачу
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: 'Ошибка при обновлении задачи' });
  }
};

// Удалить задачу
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Задача удалена' });
  } catch (err) {
    res.status(400).json({ error: 'Ошибка при удалении задачи' });
  }
};
