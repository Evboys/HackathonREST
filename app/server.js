import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { sequelize } from "./models/index.js";

import userRoutes from "./routes/users.js";
import teamRoutes from "./routes/teams.js";
import matchRoutes from "./routes/matches.js";
import goalRoutes from "./routes/goals.js";
import babyfootRoutes from "./routes/babyfoot.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/babyfoot", babyfootRoutes);

const PORT = 5000;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("✅ Database synchronized");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ Database sync error:", err));
