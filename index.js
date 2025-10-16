// index.js
import express from "express";
import { sequelize } from "./app/models/index.js"; // <-- ici ton index des modèles
import userRoutes from "./app/router/routerUser.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Connexion Sequelize
try {
  await sequelize.sync({ alter: true });
  console.log("✅ Database synchronized");
} catch (error) {
  console.error("❌ Database sync error:", error);
}

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
