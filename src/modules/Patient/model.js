import pkg from 'sequelize';
const { Model, DataTypes } = pkg;
import db from "../../config/db.js";

class Patient extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        number_security: DataTypes.STRING,
      },
      { sequelize, modelName: "Patient" }
    );
  }

  static associate(models) {
    // define association here
  }
}

Patient.init(db.sequelize);

export default Patient;
