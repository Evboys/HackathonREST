import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Team = sequelize.define("Team", {
  nom: DataTypes.STRING,
});

export default Team;
