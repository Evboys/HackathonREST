import { Goal, Team, Match } from "../models/index.js";

export const getGoals = async (req, res) => {
  try {
    const goals = await Goal.findAll({ include: [Team, Match] });
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getGoalById = async (req, res) => {
  try {
    const goal = await Goal.findByPk(req.params.id, { include: [Team, Match] });
    if (!goal) return res.status(404).json({ message: "Goal not found" });
    res.json(goal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createGoal = async (req, res) => {
  try {
    const goal = await Goal.create(req.body);
    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteGoal = async (req, res) => {
  try {
    const goal = await Goal.findByPk(req.params.id);
    if (!goal) return res.status(404).json({ message: "Goal not found" });

    await goal.destroy();
    res.json({ message: "Goal deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
