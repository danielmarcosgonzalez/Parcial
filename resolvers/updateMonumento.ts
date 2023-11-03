import { Request, Response } from "npm:express@4.18.2";
import MonumentoModel from "../db/monumentos_db.ts"

const updateMonumento = async (req: Request, res:Response)=>{
    try {
        const _id = req.params.id;
        const {nombre, descripcion, codigo_postal, codigo_iso} = req.body;
        if(!nombre || !descripcion || !codigo_postal || !codigo_iso){
            res.status(500).send("Nombre descripcion codigo_postal codigo_iso are required");
            return;
        }

        const updatedMonumento = await MonumentoModel.findOneAndUpdate(
            { _id },
            { nombre,descripcion,codigo_postal,codigo_iso },
            { new: true }
          ).exec();
    
        if (!updatedMonumento) {
            res.status(404).send("Monumento not found");
            return;
        }

        res.status(200).send({
            id: updatedMonumento._id.toString(),
            nombre: updatedMonumento.nombre,
            descripcion: updatedMonumento.descripcion,
            codigo_postal: updatedMonumento.codigo_postal,
            codigo_iso: updatedMonumento.codigo_iso
        });
        

    } catch (error) {
        res.status(500).send(error.message);
    }
};

export default updateMonumento;