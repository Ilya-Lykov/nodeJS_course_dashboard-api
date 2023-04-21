import { Request, Response, NextFunction } from "express";
import { IExceptionFilter } from "./exception.filter.interface";
import { HTTPError } from "./http.error.class";

export class ExceptionFilter implements IExceptionFilter {
	constructor() {}
	catch(err: Error, req: Request, res: Response, next: NextFunction) {
		if (err instanceof HTTPError) {
			res.status(err.statusCode).send(err.message);
		} else {
			res.status(500).send(err.message);
		}
	}
}
