//this how we import in typescript
import express from 'express';
import bodyParser, { json } from 'body-parser';

//importing router todos 
//to import default we dont use curly braces
import todoRoutes from './routes/todos'

const app=express();

app.use(bodyParser.json());
app.use(todoRoutes);


app.listen(5000);