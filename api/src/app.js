import express from "express";
import mongoose from "mongoose";
import __dirname from "./utils.js";
import * as dotenv from "dotenv";
import visitantesRouter from "./routes/visitantes.routes.js";
dotenv.config();
// import studentRouter from "./routes/student.routes.js";
const { MONGO_ATLAS_PASSWORD } = process.env;

const app = express();

app.use(express.json());

//?retryWrites=true&w=majority
mongoose
  .connect(
    `mongodb+srv://fran27dev:${MONGO_ATLAS_PASSWORD}@codercluster.p2becio.mongodb.net/NataliaApp_0001`
  )
  .then(() => {
    console.log("Connected to DB");
  });

// Utils
// app.use(express.static(__dirname + "/../public"));
//
app.use("/home", (req, res, next) => {
  try {
    res.json({ msj: "Hello World !!!", status: "Succsess" });
  } catch (e) {
    res.send(e.message);
  }
});

app.use("/api/visitantes", visitantesRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
