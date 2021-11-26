import ApiError from "../../helpers/ApiError.js";
import UserController  from "../User/controller.js";
class PatientController {
  #models;
  constructor(models) {
    this.#models = models;
  }

  login = async (req, res, next) => {
    try {

      UserController.login(req,res,next);
      //const newPatient = await this.#models.Patient.findOne();
      // if (true) throw new ApiError("error message", 403);

      // res.status(200).json("youpi");

    } catch (error) {
      next(error);
    }
  };
}

export default PatientController;
