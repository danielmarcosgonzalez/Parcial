import { Request, Response } from "npm:express@4.18.2";
import MonumentoModel from"../db/monumentos_db.ts"

import { getCity } from "../promesas/getCity.ts";

const getMonumento_id = async(req:Request, res:Response)=>{
    try {
        const _id = req.params.id; 
        const monumento = await MonumentoModel.findOne({_id}).exec();
        if(!monumento){
            res.status(404).send("Monumento not found");
            return;
        }
        const ciudad = await getCity(monumento.codigo_iso,monumento.codigo_postal.toString());



        res.status(200).send({
            id: monumento._id.toString(),
            nombre: monumento.nombre,
            descripcion: monumento.descripcion,
            codigo_postal: monumento.codigo_postal,
            pais: ,
            ciudad: ciudad.state,
            continente: ,
            hora: ,
            condiciones_meteorologicas: 
   
          });

    } catch (error) {
        res.status(500).send(error.message);
    }
};
export default getMonumento_id;