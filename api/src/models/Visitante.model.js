import mongoose from "mongoose";

const visitanteSchema = new mongoose.Schema({
  nombre: String,
  vinculo: String,
  fecha_de_visita: String,
  hora_de_visita: String,
  email: String,
  celular: String,
  nombre_del_residente: String
  
});


const visitanteModel = mongoose.model("visitante", visitanteSchema);

export default visitanteModel;
