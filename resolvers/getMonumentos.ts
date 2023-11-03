import { Request, Response } from "npm:express@4.18.2";
import MonumentoModel from"../db/monumentos_db.ts"

const getMonumento = async ( req:Request,res:Response)=>{
try {
        
    
    
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export default getMonumento;