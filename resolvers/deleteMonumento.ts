import { Request, Response } from "npm:express@4.18.2";
import MonumentoModel from"../db/monumentos_db.ts"

const deleteMonumento = async (req:Request, res: Response)=>{
try{
    const _id = req.params.id;
    const monumento = await MonumentoModel.findByIdAndDelete({_id}).exec();
    if(!monumento){
        res.status(404).send("Monumento not found");
        return;
    }
    res.status(202).send("Monumento deleted")

}catch(error){
    res.status(500).send(error.message)
    return;
}
};

export default deleteMonumento;