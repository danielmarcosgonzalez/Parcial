import { Request, Response } from "npm:express@4.18.2";
import MonumentoModel from"../db/monumentos_db.ts"

const addMonumento = async(req: Response, res:Response)=>{
    try{

    const {nombre, descripcion, codigo_postal, codigo_iso} = req.body;

    if(!nombre || !descripcion || !codigo_postal || !codigo_iso){
        res.status(500).send("Nombre descripcion codigo_postal codigo_iso are required");
        return;
    }

    const alreadyExists = await MonumentoModel.findOne({nombre}).exec();
    if(alreadyExists&&alreadyExists.codigo_postal===codigo_postal){
        res.status(400).send("Monumento already exists");
        return;
    }

    const newMonumento = new MonumentoModel({nombre,descripcion,codigo_postal,codigo_iso});
    await newMonumento.save();
    res.status(200).send({
        id: newMonumento._id.toString(),
        nombre: newMonumento.nombre,
        descripcion: newMonumento.descripcion,
        codigo_postal: newMonumento.codigo_postal,
        codigo_iso: newMonumento.codigo_iso
    })

    }catch(error){
        res.status(500).send(error.message);
    }
};

export default addMonumento;