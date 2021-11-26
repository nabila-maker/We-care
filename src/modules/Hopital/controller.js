import ApiError from "../../helpers/ApiError.js";
class HopitalController {
  #models;
  constructor(models) {
    this.#models = models;
  }
  login = async (req, res, next) => {
    try {
      UserController.login(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}
export default HopitalController;
