import { Router } from "express";
import visitanteModel from "../models/Visitante.model.js";

const visitantesRouter = Router();

visitantesRouter.get("/", async (req, res) => {
  try {
    const visitantes = await visitanteModel.res.json(visitantes);
  } catch (e) {
    res.status(500).send({ status: "error", payload: e.message });
  }
});

visitantesRouter.post("/", async (req, res) => {
  try {
    let {
      nombre,
      apellido,
      fecha_de_visita,
      email,
      celular,
      hora_de_visita,
      vinculo,
      nombre_del_residente,
    } = req.body;

    if(!nombre || !apellido || !fecha_de_visita || !email || !celular || !hora_de_visita || !vinculo || !nombre_del_residente ){
      throw new Error(`Data required to create the Visitor in D.B. are missing`)
    }

    const newVisitante = new visitanteModel(req.body);
    await newVisitante.save();
    res.json({
      msj: "Successful User addition",
      id: newVisitante._id,
      name: newVisitante.nombre,
    });
  } catch (e) {
    res.status(400).json({ error: e, message: e.message });
  }
});

export default visitantesRouter;
