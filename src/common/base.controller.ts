import { Response, Router } from "express";
import { IControllerRoute } from "./route.interface";

export abstract class BaseController {
	private readonly _router: Router;

	constructor() {
		this._router = Router();
	}
	get router() {
		return this._router;
	}

	send<T>(res: Response, code: number, message: T) {
		res.status(code);
		res.contentType("application/json");
		return res.status(code).json(message);
	}
	ok<T>(res: Response, message: T) {
		return this.send(res, 200, message);
	}

	protected bindRoutes(routes: IControllerRoute[]): void {
		routes.forEach((route) => {
			console.log(`[${route.method}] : ${route.path}`);
			let hanler = route.func.bind(this);
			this.router[route.method](route.path, hanler);
		});
	}
}
