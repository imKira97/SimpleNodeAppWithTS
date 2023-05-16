//This is how we can import Router
import { Router } from "express";

//we need curly braces since now we are dealing with name exports name should be same as export interface
import {Todo} from '../model/todo'


const router=Router();

let todos:Todo[]=[];

router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>{
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:req.body.text,
    }
    todos.push(newTodo);
    res.status(201).json({message:'todo added',todo:newTodo,todos:todos})
})

router.put('/todo/:todoId',(req,res,next)=>{
    const tid=req.params.todoId;
    const todoIndex=todos.findIndex((todoItem)=> todoItem.id===tid);
    if(todoIndex>=0){
        todos[todoIndex]={id:todos[todoIndex].id,text:req.body.text}
        //we write return bcoz we want to return from here and dont want to send the res of else block
        return res.status(200).json({message:'updated todo',todos:todos})
    }
    res.status(404).json({message:'could not found todo for this tid'})
})

router.delete('/todo/:todoId',(req,res,next)=>{
    //here we will filter out the todo which we want to delete 
    todos=todos.filter((todoItem)=>todoItem.id!==req.params.todoId)
    res.status(200).json({message:'deleted todo',todos:todos})
})
//instead of module.exports we will do
export default router;