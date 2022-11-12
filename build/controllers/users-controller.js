"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { username: "alfred", age: "64", uuid: "0" },
    { username: "robin", age: "19", uuid: "1" }
];
class UserControl {
    async index(req, res, next) {
        res.status(200).json(users);
    }
}
exports.default = UserControl;
