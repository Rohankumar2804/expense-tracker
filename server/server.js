import express from "express";
import mongoose from "mongoose";
import cors from 'cors'

const app = express();
const PORT =4000;
app.use(cors);
await mongoose.connect('mongodb+srv://rohan28:rohan28@cluster0.0hbmc.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log('connection don')).catch((err)=>console.log(err));

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(PORT,()=>{
    console.log('hey There');
})