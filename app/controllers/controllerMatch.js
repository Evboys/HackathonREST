import { Match, Team, Babyfoot } from "../models/index.js";

export const getMatches = async (req, res) => {
  try {
    const matches = await Match.findAll({
      include: [Team, Babyfoot],
    });
    res.json(matches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMatchById = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id, {
      include: [Team, Babyfoot],
    });
    if (!match) return res.status(404).json({ message: "Match not found" });
    res.json(match);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createMatch = async (req, res) => {
  try {
    const match = await Match.create(req.body);
    res.status(201).json(match);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateMatch = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) return res.status(404).json({ message: "Match not found" });

    await match.update(req.body);
    res.json(match);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMatch = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) return res.status(404).json({ message: "Match not found" });

    await match.destroy();
    res.json({ message: "Match deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
