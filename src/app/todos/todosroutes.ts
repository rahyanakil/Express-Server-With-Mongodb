import express ,{Request,Response}from "express"
import { ObjectId } from "mongodb";
import { client } from "src/config/mongodb";
export const todosRouter =express.Router();

//all todo datas
todosRouter.get("/",async(req:Request,res:Response)=>{

    const db =await client.db("todosDB")
    const collection = await db.collection('todos');
    const cursor =collection.find({})
    const todos =await cursor.toArray()
    res.json(todos)
})
//create todo
todosRouter.post('/create-todo',async(req:Request,res:Response)=>{

    const {title,description}=req.body;

    const db =await client.db("todosDB")
    const collection = await db.collection('todos');

    await collection.insertOne({
        "title":title,
        "Description":description
    })
const cursor =collection.find({})
const todos =await cursor.toArray()

    
    
    res.json(todos)
   
})
//get single todo by id 
todosRouter.get("/:id",async (req:Request,res:Response)=>{
    const id =req.params.id;
        const db =await client.db("todosDB")
    const collection =await db.collection("todos")
    const todo =await collection.findOne({_id :new ObjectId(id)})
    res.json(todo)
  
 
})

//delete todo 
todosRouter.delete("/delete-todo/:id",async(req:Request,res:Response)=>{
    const id =req.params.id;
    const db =await client.db("todosDB")
    const collection =await db.collection("todos")
    const data =await collection.deleteOne({_id:new ObjectId(id)})
    res.json(data)

})

//update todo 
todosRouter.patch("/update-todo",async(req:Request,res:Response)=>{
    const {title,description}=req.body;
    const id =req.params.id;
    const db=await client.db("godosDB")
    const collection =await db.collection("todos")
    await collection.updateOne({
        "title":title,
        "Description":description
    })
const cursor =collection.find({})
const todos =await cursor.toArray()

    
    
    res.json(todos)
})

