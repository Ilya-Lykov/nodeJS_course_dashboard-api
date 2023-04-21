import { BaseController } from "../common/base.controller";
import { NextFunction, Request, Response } from "express";

export class UserController extends BaseController {
	constructor() {
		super();
		this.bindRoutes([
			{ path: "/", method: "get", func: this.usersHomePage },
			{ path: "/login", method: "post", func: this.login },
			{ path: "/register", method: "post", func: this.register },
		]);
	}
	login(req: Request, res: Response, next: NextFunction) {
		this.ok(res, "login");
	}
	register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, "register");
	}
	usersHomePage(req: Request, res: Response, next: NextFunction) {
		this.ok(res, "Users Home Page");
	}
}
