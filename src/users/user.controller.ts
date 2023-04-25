import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller";
import { HTTPError } from "../errors/http-error.class";
import { injectable, inject } from "inversify";
import { TYPES } from "../types";
import { ILogger } from "../service/logger.interface";
import "reflect-metadata";

@injectable()
export class UserController extends BaseController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([
			{ path: "/", method: "get", func: this.usersHome },
			{ path: "/register", method: "post", func: this.register },
			{ path: "/login", method: "post", func: this.login },
		]);
	}
	login(req: Request, res: Response, next: NextFunction) {
		next(new HTTPError(401, "Ошибка Авторизации"));
	}
	register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, "register");
	}
	usersHome(req: Request, res: Response, next: NextFunction) {
		this.ok(res, "Home Page");
	}
}
