import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../common/base.controller';
import { injectable, inject } from 'inversify';
import { TYPES } from '../types';
import { ILogger } from '../service/logger.interface';
import 'reflect-metadata';
import { IUserController } from './user.controller.inteface';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserService } from './dto/users.service';
import { HTTPError } from '../errors/http-error.class';
import { ValidateMiddleWare } from '../common/validate.middleware';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(
		@inject(TYPES.ILogger) private loggerService: ILogger,
		@inject(TYPES.UserService) private userService: UserService,
	) {
		super(loggerService);
		this.bindRoutes([
			{ path: '/', method: 'get', func: this.usersHome },
			{
				path: '/register',
				method: 'post',
				func: this.register,
				middlewares: [new ValidateMiddleWare(UserRegisterDto)],
			},
			{ path: '/login', method: 'post', func: this.login },
		]);
	}
	login(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): void {
		console.log(req.body);
		this.ok(res, 'login');
	}
	async register(
		{ body }: Request<{}, {}, UserRegisterDto>,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		const result = await this.userService.createUser(body);
		if (!result) {
			return next(new HTTPError(422, 'Такой пользователя уже существует'));
		}
		this.ok(res, { email: result.email, name: result.name });
	}
	usersHome(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'Hello World from Users Router!!!');
	}
}
