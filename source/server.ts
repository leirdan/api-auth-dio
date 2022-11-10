import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/start", (req: Request, res: Response, next:NextFunction) => {
    res.status(200).send({"best artist": "lana del rey"});
})

const PORT = 3001

app.listen(process.env.PORT || PORT, () => {
    console.log("Server is open.")
})