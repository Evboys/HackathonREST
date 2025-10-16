import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

import User from "./modelUser.js";
import Team from "./modelTeam.js";
import Match from "./modelMatch.js";
import Goal from "./modelGoal.js";
import Babyfoot from "./modelBabyfoot.js";

// Relations
Team.hasMany(User, { foreignKey: "team_id" });
User.belongsTo(Team, { foreignKey: "team_id" });

Team.hasMany(Match, { foreignKey: "id_equipe_1" });
Team.hasMany(Match, { foreignKey: "id_equipe_2" });

Babyfoot.hasMany(Match, { foreignKey: "babyfoot_id" });
Match.belongsTo(Babyfoot, { foreignKey: "babyfoot_id" });

Match.hasMany(Goal, { foreignKey: "id_match" });
Goal.belongsTo(Match, { foreignKey: "id_match" });

Team.hasMany(Goal, { foreignKey: "id_equipe" });
Goal.belongsTo(Team, { foreignKey: "id_equipe" });

export { sequelize, User, Team, Match, Goal, Babyfoot };
