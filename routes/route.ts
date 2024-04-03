import express, { Request, Response } from "express";
import { User, ValidationResult } from "../types";
import validateUser from "../validation";
import UserData from "../data.json";

const router = express.Router();

// Create a new user
router.post("/users", (req: Request, res: Response) => {
  const newUser: User = req.body;

  // Validate the user data
  const validationResult: ValidationResult = validateUser(newUser);
  if (!validationResult.isValid) {
    return res.status(400).json({ error: validationResult.error });
  }

  // Add the user
  newUser.id = UserData.length + 1;
  UserData.push(newUser);
  return res.status(201).json({ message: "User created successfully" });
});

// Read a user by ID
router.get("/users/:userId", (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.userId);
  let isUser = UserData.find((user) => user.id == userId);

  if (isUser) {
    return res.status(200).json(isUser);
  }
  return res.status(404).json({ error: "User not found" });
});

// Update a user by ID
router.put("/users/:userId", (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.userId);
  const updatedUser: User = req.body;

  // Find the index of the user to update
  let isUser = UserData.find((user) => user.id == userId);
  if (isUser) {
    // Validate the updated user data
    const validationResult: ValidationResult = validateUser(updatedUser);
    if (!validationResult.isValid) {
      return res.status(400).json({ error: validationResult.error });
    }

    // Update the user data
    Object.assign(isUser, updatedUser);
    return res.status(200).json({ message: "User updated successfully" });
  } else {
    return res.status(404).json({ error: "User not found" });
  }
});

// Delete a user by ID
router.delete("/users/:userId", (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);

  // Find the index of the user to delete
  const index = UserData.findIndex((user) => user.id === userId);
  if (index !== -1) {
    // Remove the user from the data
    UserData.splice(index, 1);
    return res.status(200).json({ message: "User deleted successfully" });
  }

  return res.status(404).json({ error: "User not found" });
});

export default router;
