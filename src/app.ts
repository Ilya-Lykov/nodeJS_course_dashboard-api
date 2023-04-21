import express, { Express, NextFunction, Request, Response } from "express";
import { Server } from "http";
import { UserController } from "./users/user.controller";
import { ExceptionFilter } from "./errors/exception.filter";

export class App {
	app: Express;
	port: number;
	server: Server;
	userController: UserController;
	exceptionFilter: ExceptionFilter;

	constructor(
		userController: UserController,
		exceptionFilter: ExceptionFilter
	) {
		this.app = express();
		this.port = 8080;
		this.userController = userController;
		this.exceptionFilter = exceptionFilter;
	}
	useExceptionFilter() {
		this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
	}

	useRoutes() {
		this.app.get("/", (req: Request, res: Response, next: NextFunction) => {
			res.send("Hello World");
			console.log("Hello World");
		});
		this.app.use("/users", this.userController.router);
	}

	init() {
		this.useRoutes();
		this.useExceptionFilter();
		this.server = this.app.listen(this.port);
		console.log(`Сервер запущен на http://localhost:${this.port}`);
	}
}
