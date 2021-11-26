import ApiError from "../../helpers/ApiError.js";

class ConsultationController {
  #models;
  constructor(models) {
    this.#models = models;
  }


  add= async (req, res, next) => {
    try {
        const book = await this.#models.Consultation.create({ ...req.body });
        res.status(201).json(book);
    } catch (err) {
        next(err);
    }
}

getOne= async (id) => {
    const consultation = await this.#models.Consultation.findAll({
         where: {
             id
         },
         attributes: { exclude: ["createdAt", "updatedAt"] },
       
     });
     if (!consultation) {
         throw new ApiError("Ressource not exists");
     }

     return consultation;
 }

 update= async (id, data) => {
    const consultationFound = await this.#models.Consultation.findOne({
      where: { id },
    });
    if (!consultationFound) {
      throw new ApiError("Ressource not exists");
    }
   
    await consultationFound.update(data);

    const consultation = await this.#models.Consultation.findOne({
      where: {
        id
      },
      attributes: {exclude: ["dateCreated"]},
    }); 

    return consultation;
  }
   
  deleteOption= async (id, data) => {
    const consultationFound = await this.#models.Consultation.findOne({
      where: { id },
    });
    if (!consultationFound) {
      throw new ApiError("Ressource not exists");
    }
   
    await consultationFound.delete();

    return consultationFound;
  }



}

export default ConsultationController;