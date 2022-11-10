"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("./routes/users-routes"));
const app = (0, express_1.default)();
app.use(users_routes_1.default);
const PORT = 3001;
app.listen(process.env.PORT || PORT, () => {
    console.log("Server is open.");
});
