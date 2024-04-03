"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validation_1 = __importDefault(require("../validation"));
const data_json_1 = __importDefault(require("../data.json"));
const router = express_1.default.Router();
// Create a new user
router.post("/users", (req, res) => {
    const newUser = req.body;
    // Validate the user data
    const validationResult = (0, validation_1.default)(newUser);
    if (!validationResult.isValid) {
        return res.status(400).json({ error: validationResult.error });
    }
    // Add the user
    newUser.id = data_json_1.default.length + 1;
    data_json_1.default.push(newUser);
    return res.status(201).json({ message: "User created successfully" });
});
// Read a user by ID
router.get("/users/:userId", (req, res) => {
    const userId = parseInt(req.params.userId);
    let isUser = data_json_1.default.find((user) => user.id == userId);
    if (isUser) {
        return res.status(200).json(isUser);
    }
    return res.status(404).json({ error: "User not found" });
});
// Update a user by ID
router.put("/users/:userId", (req, res) => {
    const userId = parseInt(req.params.userId);
    const updatedUser = req.body;
    // Find the index of the user to update
    let isUser = data_json_1.default.find((user) => user.id == userId);
    if (isUser) {
        // Validate the updated user data
        const validationResult = (0, validation_1.default)(updatedUser);
        if (!validationResult.isValid) {
            return res.status(400).json({ error: validationResult.error });
        }
        // Update the user data
        Object.assign(isUser, updatedUser);
        return res.status(200).json({ message: "User updated successfully" });
    }
    else {
        return res.status(404).json({ error: "User not found" });
    }
});
// Delete a user by ID
router.delete("/users/:userId", (req, res) => {
    const userId = parseInt(req.params.userId);
    // Find the index of the user to delete
    const index = data_json_1.default.findIndex((user) => user.id === userId);
    if (index !== -1) {
        // Remove the user from the data
        data_json_1.default.splice(index, 1);
        return res.status(200).json({ message: "User deleted successfully" });
    }
    return res.status(404).json({ error: "User not found" });
});
exports.default = router;
