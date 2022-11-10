import express from "express";
import router from "./routes/users-routes"

const app = express();

app.use(router)

const PORT = 3001

app.listen(process.env.PORT || PORT, () => {
    console.log("Server is open.")
})
