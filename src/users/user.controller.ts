import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error.class';
import { injectable, inject } from 'inversify';
import { TYPES } from '../types';
import { ILogger } from '../service/logger.interface';
import 'reflect-metadata';
import { IUserController } from './user.controller.inteface';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([
			{ path: '/', method: 'get', func: this.usersHome },
			{ path: '/register', method: 'post', func: this.register },
			{ path: '/login', method: 'post', func: this.login },
		]);
	}
	login(req: Request, res: Response, next: NextFunction): void {
		console.log('ds');
		next(new HTTPError(401, 'Ошибка Авторизации'));
	}
	register(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'register');
	}
	usersHome(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'Hello World from Users Router!!!');
	}
}
