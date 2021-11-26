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

  getAll = async ({ res, next }) => {
    try {
      let hopitals = await this.#models.finAll();
      res.status(200).json(hopitals);
    } catch (error) {
      next(error);
    }
  };
  getOne = async ({}) => {
    try {
      let hopital = await this.#models.findOne();
      res.status(200).json(hopital);
    } catch (error) {
      nex(error);
    }
  };
}
export default HopitalController;
