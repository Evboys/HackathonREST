import express from "express";
import {
  getBabyfoots,
  getBabyfootById,
  createBabyfoot,
  updateBabyfoot,
  deleteBabyfoot,
} from "../controllers/babyfootController.js";

const router = express.Router();

router.get("/", getBabyfoots);
router.get("/:id", getBabyfootById);
router.post("/", createBabyfoot);
router.put("/:id", updateBabyfoot);
router.delete("/:id", deleteBabyfoot);

export default router;
