import pkg from 'sequelize';
const { Model, DataTypes } = pkg;
import db from "../../config/db.js";


class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        type: DataTypes.STRING,
      },
      { sequelize, modelName: "User" }
    );
  }

  static associate(models) {
    // define association here
  }
}

User.init(db.sequelize);

export default User;
