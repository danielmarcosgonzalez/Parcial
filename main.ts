import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";
import { Request, Response } from "npm:express@4.18.2";
import {load} from "https://deno.land/std@0.204.0/dotenv/mod.ts";

import addMonumento from "./resolvers/addMonumento.ts";
import deleteMonumento from "./resolvers/deleteMonumento.ts";
import updateMonumento from "./resolvers/updateMonumento.ts";

const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");//Primero la variable del archivo env y la otra variable de entorno del sistema operativo

if(!MONGO_URL){
    console.error("Url not found");
    Deno.exit(1);
}

try{

  await mongoose.connect(MONGO_URL);
  console.info("Mongo connected");
  const app = express();
  app.use(express.json());
  
  app.get("/",async(req:Request, res: Response)=>{
    res.status(200).send("Examen parcial");
  })

  .post("/api/monumentos",addMonumento)
  .put("/api/monumentos/:id",updateMonumento)
  .delete("/api/monumentos/:id",deleteMonumento)

  
  app.listen(3000,()=>{
    console.log("Server started on port 3000")
  })
  
  }catch(e){
    console.error(e);
  }
  