import express, { Express } from "express";
import { Server } from "http";
import { UserController } from "./users/user.controller";
import { ExceptionFilter } from "./errors/exception.filter";
import { ILogger } from "./service/logger.interface";

export class App {
	app: Express;
	port: number;
	server: Server;
	logger: ILogger;
	userController: UserController;
	exceptionFilter: ExceptionFilter;

	constructor(
		logger: ILogger,
		userController: UserController,
		exceptionFilter: ExceptionFilter
	) {
		this.app = express();
		this.port = 8080;
		this.logger = logger;
		this.userController = userController;
		this.exceptionFilter = exceptionFilter;
	}
	useExceptionFilters() {
		this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
	}

	useRoutes() {
		this.app.use("/users", this.userController.router);
	}

	public async init() {
		this.useRoutes();
		this.useExceptionFilters();
		this.server = this.app.listen(this.port);
		this.logger.log(`Сервер запущен на http://localhost:${this.port}`);
	}
}
