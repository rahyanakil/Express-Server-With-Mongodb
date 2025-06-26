import express ,{Request,Response}from "express"
import { client } from "src/config/mongodb";
export const todosRouter =express.Router();


todosRouter.get("/",(req:Request,res:Response)=>{

})

todosRouter.post('create-todo',async(req:Request,res:Response)=>{
    const db =await client.db("todosDB")
    const collection = await db.collection('todosCollection');

    const todos =await collection.insertOne({
        title:"MongoDb",
        body:"Mongodb"
    })
    
    res.json(todos)
    // const todos =collection.find({})
    // console.log(todos);
    
    // res.json(todos)
    // {"title":"web dev",
    // "description":"Hey i am learning express.js"
    // "priority":High,Medium,low
    // "isCompleted":"true"
    // }
})

