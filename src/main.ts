import { App } from "./app";
import { ExceptionFilter } from "./errors/exception.filter";
import { UserController } from "./users/user.controller";

class Main {
	static bootstrap() {
		new App(new UserController(), new ExceptionFilter()).init();
	}
}

Main.bootstrap();
