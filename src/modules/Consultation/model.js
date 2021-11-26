import pkg from 'sequelize';
const { Model, DataTypes } = pkg;
import db from "../../config/db.js";

class Consultation extends Model {
  static init(sequelize) {
    return super.init(
      {
        id_patient: DataTypes.INTEGER,
        id_doctor: DataTypes.INTEGER,
        date: DataTypes.DATE,
        hour: DataTypes.TIME,
        valid: DataTypes.BOOLEAN,
      },
      { sequelize, modelName: "Patient" }
    );
  }

  static associate(models) {
    // define association here
  }
}

Consultation.init(db.sequelize);

export default Consultation;
