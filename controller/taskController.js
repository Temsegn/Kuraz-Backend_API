import Task from '../models/task.js';
// Get all tasks
export const  getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// Get task by custom tid
export const getTaskByTid = async (req, res) => {
  const task = await Task.findOne({ tid: req.params.tid });
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
};

// Create new task
export const createTask = async (req, res) => {
  const { tid, title, description, priority } = req.body;
  try {
    const task = new Task({ tid, title, description, priority });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update task by tid
export const updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate({ tid: req.params.tid }, req.body, { new: true });
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
};

// Delete task by tid
export const deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete({ tid: req.params.tid });
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json({ message: 'Task deleted' });
};

