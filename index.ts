import express, { Request, Response, NextFunction } from "express";
import { usersRouter } from "./users/users.js";

const port = 8080;
const app = express();

app.use((req, res, next) => {
	console.log("Время ", Date.now());
	next();
});

app.get("/hello", (req, resp) => {
	throw new Error("new Error");
});

app.use("/users", usersRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log(err.message);
	res.status(500).send(err.message);
});

app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`);
});
