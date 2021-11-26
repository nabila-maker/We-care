import pkg from "sequelize";
const { Model, DataTypes } = pkg;
import User from "../User/model.js";
import db from "../../config/db.js";

class Hopital extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        tel: DataTypes.INTEGER,
      },
      { sequelize, modelName: "Hopital" }
    );
  }

  static associate(models) {
    // define association here
  }
}

Hopital.init(db.sequelize);

export default Hopital;
