import express from 'express';
import {
  getAllTasks,
  getTaskByTid,
  createTask,
  updateTask,
  deleteTask
} from '../controller/taskController.js';
const router = express.Router();

router.get('/', getAllTasks);
router.get('/:tid', getTaskByTid);
router.post('/', createTask);
router.put('/:tid', updateTask);
router.delete('/:tid', deleteTask);

export default router;