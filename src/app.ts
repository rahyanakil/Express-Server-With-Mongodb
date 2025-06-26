
import express,{Application,Request,Response } from 'express';
import { todosRouter } from './app/todos/todosroutes.js';


const app:Application = express()






app.use("/todos",todosRouter)




app.get('/', (req: Request, res: Response) => {
  res.send('Hello world from Express')
})

app.get('/todos', (req: Request, res: Response) => {
 
 

 
})

app.post('/todos/create-todo',(req:Request,res:Response)=>{
 
})

export default app;




