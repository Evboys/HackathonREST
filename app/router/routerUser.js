import express from "express";
import {
  getUsers,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
} from "../controllers/controllerUser.js";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/adminMiddleware.js";

const router = express.Router();

// Auth
router.post("/register", createUser);
router.post("/login", loginUser);

// Admin-only
router.get("/", verifyToken, isAdmin, getUsers);
router.delete("/:id", verifyToken, isAdmin, deleteUser);

// User or admin
router.put("/:id", verifyToken, updateUser);

export default router;
