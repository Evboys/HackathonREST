import { Babyfoot } from "../models/index.js";

export const getBabyfoots = async (req, res) => {
  try {
    const list = await Babyfoot.findAll();
    res.json(list);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBabyfootById = async (req, res) => {
  try {
    const babyfoot = await Babyfoot.findByPk(req.params.id);
    if (!babyfoot) return res.status(404).json({ message: "Babyfoot not found" });
    res.json(babyfoot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createBabyfoot = async (req, res) => {
  try {
    const babyfoot = await Babyfoot.create(req.body);
    res.status(201).json(babyfoot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBabyfoot = async (req, res) => {
  try {
    const babyfoot = await Babyfoot.findByPk(req.params.id);
    if (!babyfoot) return res.status(404).json({ message: "Babyfoot not found" });

    await babyfoot.update(req.body);
    res.json(babyfoot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBabyfoot = async (req, res) => {
  try {
    const babyfoot = await Babyfoot.findByPk(req.params.id);
    if (!babyfoot) return res.status(404).json({ message: "Babyfoot not found" });

    await babyfoot.destroy();
    res.json({ message: "Babyfoot deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
