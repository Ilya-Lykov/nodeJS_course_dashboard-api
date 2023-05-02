import { inject, injectable } from 'inversify';
import { User } from '../user.entity';
import { UserLoginDto } from './user-login.dto';
import { UserRegisterDto } from './user-register.dto';
import { IUserService } from './users.service.interface';
import { IConfigService } from '../../config/config.service.interface';
import { TYPES } from '../../types';

@injectable()
export class UserService implements IUserService {
	constructor(@inject(TYPES.ConfigService) private configService: IConfigService) {}

	async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		const salt = this.configService.get('SALT');
		await newUser.setPassword(password, Number(salt));
		//проверка что он есть?
		//если есть - возбращаем null
		//если нет возвращаем пользователя
		return null;
	}

	async validateUser({ email, password }: UserLoginDto): Promise<boolean> {
		return true;
	}
}
