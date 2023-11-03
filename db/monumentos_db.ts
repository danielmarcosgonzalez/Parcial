import mongoose from "npm:mongoose@7.6.3";
import { Monumento } from "../types/type.ts";

const Schema = mongoose.Schema;

const monumentosSchema = new Schema({
    nombre:{type:String, required: true},
    descripcion:{type:String, required: true},
    codigo_postal:{type:Number, required: true},
    codigo_iso:{type:String, required: true}
});

export type MonumentoModelType = mongoose.Document & Omit<Monumento, "id">;
export default mongoose.model<MonumentoModelType>("Monumento",monumentosSchema);