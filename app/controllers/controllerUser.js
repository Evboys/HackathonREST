import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";

const JWT_SECRET = "super_secret_key"; // ⚠️ à mettre dans un .env en prod

// ➤ Obtenir tous les utilisateurs (admin only)
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["mdp"] } });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➤ Créer un utilisateur
export const createUser = async (req, res) => {
  try {
    const { name, surname, addresse, mdp, team_id, is_admin } = req.body;

    const hashedPassword = await bcrypt.hash(mdp, 10);

    const newUser = await User.create({
      name,
      surname,
      addresse,
      mdp: hashedPassword,
      team_id,
      is_admin: is_admin || false,
      created_at: new Date(),
    });

    res.status(201).json({
      message: "User created successfully",
      user: { id: newUser.id, name: newUser.name, is_admin: newUser.is_admin },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➤ Connexion utilisateur
export const loginUser = async (req, res) => {
  try {
    const { name, mdp } = req.body;
    const user = await User.findOne({ where: { name } });

    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordValid = await bcrypt.compare(mdp, user.mdp);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, is_admin: user.is_admin },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({ token, user: { id: user.id, name: user.name, is_admin: user.is_admin } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➤ Modifier un utilisateur (admin ou soi-même)
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Vérifie si c'est lui-même ou un admin
    if (req.user.id !== user.id && !req.user.is_admin) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const { name, surname, addresse, team_id } = req.body;
    await user.update({ name, surname, addresse, team_id });

    res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➤ Supprimer un utilisateur (admin only)
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    await user.destroy();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
