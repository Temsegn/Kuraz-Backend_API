 
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import taskRoutes from './routes/taskRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
