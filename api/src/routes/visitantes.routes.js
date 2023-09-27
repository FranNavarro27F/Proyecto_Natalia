import { Router } from "express";
import visitanteModel from "../models/Visitante.model.js";
import { PostVisitante }   from "../controllers/visitantes.controller.js";

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
    res.json( await PostVisitante(req.body) );
  } catch (e) {
    res.status(400).json({ error: e, message: e.message });
  }
});


export default visitantesRouter;