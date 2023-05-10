import { IMiddleWare } from './middleware.interface';
import { NextFunction, Request, Response } from 'express';
import { HTTPError } from '../errors/http-error.class';

export class AuthGuard implements IMiddleWare {
	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.user) {
			next();
		} else {
			return next(new HTTPError(401, 'Пользователь неавторизован'));
		}
	}
}
