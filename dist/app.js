import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../db/todo.json');
const todosRouter = express.Router();
const userRouter = express.Router();
app.use("/todos", todosRouter);
app.use("/user", userRouter);
userRouter.get('/', (req, res) => {
    res.send('Hello From User');
});
app.get('/', (req, res) => {
    res.send('Hello world from Express');
});
app.get('/todos', (req, res) => {
    const data = fs.readFileSync(filePath, { encoding: 'utf8' });
    console.log(data);
    res.json(data);
});
app.post('/todos/create-todo', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('hello world');
});
export default app;
