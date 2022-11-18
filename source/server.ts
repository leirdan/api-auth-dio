import express from "express";
import router from "./routes/users-routes";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { User } from "./models/user-model";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

AppDataSource.initialize()
	.then(() => {
		console.log("Conexão bem sucedida!");
	})
	.catch((err) => {
		console.error(err);
	});

const PORT = 3001;

app.listen(process.env.PORT || PORT, () => {
	console.log("Server is open.");
});
