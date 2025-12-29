import supabase from "./db.js";
import express from "express";
import checkInput from "./middlwhere/check.js";
import { DatabaseSync } from "node:sqlite";

const app = express();
app.use(express.json());

app.post("/post", checkInput, async (req, res) => {
  try {
    const data = await supabase
      .from("users")
      .insert({ username: req.body.username, password: req.body.password });
    res.status(201).send("good for you");
  } catch (err) {
    res.send(err.message);
  }
});

app.get("/get", async (req, res) => {
  try {
    const data = await supabase.from("users").select();
    res.status(200).json({ data: data.data });
  } catch (err) {
    res.json({ err: err.message });
  }
});

app.post("/login",  checkInput, async (req, res) => {
  const {username ,password} = req.body;
  
  const { data } = await supabase
    .from("users")
    .select("username  ,password")
    .eq("username ", username)
    .eq("password", password);
    
   
    


if(data.length < 1 ){
    
    
    
    

    return res.status(404).send("Wrong username or password");}
  


  
res.status(200).send("Login successful")}
  
);

app.listen(3000, () => {
  console.log("server run");
});
