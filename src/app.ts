
import express,{Application,Request,Response } from 'express';
import { todosRouter } from './app/todos/todosroutes.js';


const app:Application = express();



app.use(express.json())


app.use("/todos",todosRouter)




app.get('/', (req: Request, res: Response) => {
  res.send('Hello world from Express')
})





export default app;




