import express from 'express';
import { todosRouter } from './todos/todosroutes';
const app = express();
app.use("/todos", todosRouter);
app.get('/', (req, res) => {
    res.send('Hello world from Express');
});
app.get('/todos', (req, res) => {
});
app.post('/todos/create-todo', (req, res) => {
});
export default app;
