import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    axios.get('/api/tasks')
      .then(res => setTasks(res.data))
      .catch(err => console.error('Ошибка при загрузке:', err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error('Ошибка при удалении:', err);
    }
  };

  const toggleComplete = async (task) => {
    try {
      await axios.put(`/api/tasks/${task._id}`, {
        completed: !task.completed,
      });
      fetchTasks();
    } catch (err) {
      console.error('Ошибка при обновлении:', err);
    }
  };

  return (
    <div>
      <h2>📋 Список задач</h2>
      {tasks.length === 0 && <p>Нет задач</p>}
      <ul>
        {tasks.map(task => (
          <li key={task._id} style={{ marginBottom: '10px' }}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => toggleComplete(task)}
            >
              {task.title}
            </span>
            <button
              onClick={() => handleDelete(task._id)}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
