import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Match = sequelize.define("Match", {
  score_1: DataTypes.INTEGER,
  score_2: DataTypes.INTEGER,
  id_equipe_1: DataTypes.INTEGER,
  id_equipe_2: DataTypes.INTEGER,
  vitesse_max: DataTypes.FLOAT,
  babyfoot_id: DataTypes.INTEGER,
  create_at: DataTypes.DATE,
});

export default Match;
