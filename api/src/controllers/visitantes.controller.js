import visitantesModel from "../models/Visitante.model.js";

export const GetVisitantes = async () => {
  const users = await visitantesModel.find();
  return users;
};

export const PostVisitante = async (body) => {
  try {
    // let {
    //     nombre,
    //     apellido,
    //     fecha_de_visita,
    //     email,
    //     celular,
    //     hora_de_visita,
    //     vinculo,
    //     nombre_del_residente,
    //   } =
    //   body;

    // if(!nombre ||
    //   !apellido ||
    //   !fecha_de_visita ||
    //   !email ||
    //   !celular ||
    //   !hora_de_visita ||
    //   !vinculo ||
    //   !nombre_del_residente){
    //   throw new Error("data required to create the Visitor in D.B. are missing");
    // }
    const newvisitante = new visitantesModel(body);
    await newvisitante.save();
    return {
      msj: "Successful visitante addition",
      id: newvisitante._id,
      name: newvisitante.nombre,
    };
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

// module.exports= { PostVisitante };
