import { injectable } from 'inversify';
import { User } from '../user.entity';
import { UserLoginDto } from './user-login.dto';
import { UserRegisterDto } from './user-register.dto';
import { IUserService } from './users.service.interface';

@injectable()
export class UserService implements IUserService {
	async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		await newUser.setPassword(password);
		//проверка что он есть?
		//если есть - возбращаем null
		//если нет возвращаем пользователя
		return null;
	}
	async validateUser({ email, password }: UserLoginDto): Promise<boolean> {
		return true;
	}
}
