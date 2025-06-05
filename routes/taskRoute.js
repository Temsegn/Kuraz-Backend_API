import Task from '../models/Task.js';
import express from 'express';
import taskController from '../controllers/taskController.js';
const router = express.Router();


router.get('/', taskController.getAllTasks);
router.get('/:tid', taskController.getTaskByTid);
router.post('/', taskController.createTask);
router.put('/:tid', taskController.updateTask);
router.delete('/:tid', taskController.deleteTask);

module.exports = router;
