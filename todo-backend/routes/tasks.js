const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController');

// Маршруты
router.get('/', taskController.getTasks);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
