import ApiError from "../../helpers/ApiError.js";

class PatientController {
  #models;
  constructor(models) {
    this.#models = models;
  }

  login = async (req, res, next) => {
    try {
      //const newPatient = await this.#models.Patient.findOne();
      if (true) throw new ApiError("error message", 403);

      res.status(200).json("youpi");
    } catch (error) {
      next(error);
    }
  };
}

export default PatientController;
