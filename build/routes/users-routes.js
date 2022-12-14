"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const users = [
    { username: "alfred", age: 64, uuid: 0 },
    { username: "robin", age: 19, uuid: 1 }
];
router.get("/users", (req, res, next) => {
    res.status(200).json(users);
});
router.get("/users/:uuid", (req, res, next) => {
    const uuid = Number(req.params.uuid);
    const requestedUser = users.find((user) => user.uuid == uuid);
    res.status(200).json(requestedUser);
});
router.post("/users", (req, res, next) => {
    const newUser = req.body;
    users.push(req.body);
    res.status(201).json(newUser);
});
router.put("/users/:uuid", (req, res, next) => {
    const uuid = Number(req.params.uuid);
    let userSelect = users.find((user) => user.uuid == uuid);
    const alteredUser = req.body;
    userSelect = alteredUser;
    users.push(alteredUser);
    res.status(200).json(userSelect);
});
router.delete("/users/:uuid", (req, res, next) => {
    const uuid = Number(req.params.uuid);
    const deletedUser = users.find((user) => user.uuid == uuid);
    const index = users.indexOf(deletedUser);
    users.splice(index, 1);
    res.status(200).json(users);
});
exports.default = router;
