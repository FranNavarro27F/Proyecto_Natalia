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
    console.log(req.body);

    const newVisitante = new visitanteModel(req.body);
    await newVisitante.save();
    res.json({
      msj: "Successful User addition",
      id: newVisitante._id,
      name: newVisitante.name,
    });
  } catch (e) {
    res.status(400).json({ error: e, message: e.message });
  }
});

export default visitantesRouter;
