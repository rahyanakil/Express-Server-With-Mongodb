
import express,{Application,Request,Response } from 'express';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
const app:Application = express()
const __filename =fileURLToPath(import.meta.url);
const __dirname =path.dirname(__filename);
const filePath = path.join(__dirname,'../db/todo.json');


const todosRouter =express.Router();
const userRouter =express.Router();

app.use("/todos",todosRouter)
app.use("/user",userRouter)


userRouter.get('/',(req:Request,res:Response)=>{
res.send('Hello From User')
})

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world from Express')
})

app.get('/todos', (req: Request, res: Response) => {
 const data =fs.readFileSync(filePath,{encoding: 'utf8'});
 
console.log(data);
res.json(data)
 
})

app.post('/todos/create-todo',(req:Request,res:Response)=>{
  const data =req.body;
  console.log(data)
  res.send('hello world')
})

export default app;




