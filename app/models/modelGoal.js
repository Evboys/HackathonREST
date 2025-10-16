import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Goal = sequelize.define("Goal", {
  id_equipe: DataTypes.INTEGER,
  id_match: DataTypes.INTEGER,
  vitesse: DataTypes.FLOAT,
});

export default Goal;
