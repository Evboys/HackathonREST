import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Babyfoot = sequelize.define("Babyfoot", {
  id_match: DataTypes.INTEGER,
  is_used: DataTypes.BOOLEAN,
  etat: DataTypes.STRING,
});

export default Babyfoot;
