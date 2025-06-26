import express from "express";
export const todosRouter = express.Router();
todosRouter.get("/", (req, res) => {
});
todosRouter.post('create-todo', (req, res) => {
    // {"title":"web dev",
    // "description":"Hey i am learning express.js"
    // "priority":High,Medium,low
    // "isCompleted":"true"
    // }
});
