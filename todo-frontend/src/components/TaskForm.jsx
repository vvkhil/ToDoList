import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await axios.post('/api/tasks', { title });
      setTitle('');
      onTaskAdded(); // обновить список задач
    } catch (err) {
      console.error('Ошибка при добавлении задачи:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={title}
        placeholder="Новая задача"
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '8px', width: '70%' }}
      />
      <button type="submit" style={{ padding: '8px 12px', marginLeft: '10px' }}>
        ➕ Добавить
      </button>
    </form>
  );
};

export default TaskForm;
