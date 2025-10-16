import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  surname: DataTypes.STRING,
  addresse: DataTypes.STRING,
  mdp: DataTypes.STRING,
  team_id: DataTypes.INTEGER,
  is_admin: DataTypes.BOOLEAN,
  created_at: DataTypes.DATE,
});

export default User;
