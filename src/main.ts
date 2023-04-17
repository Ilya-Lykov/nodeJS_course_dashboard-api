import { App } from "./app";
import { LoggerService } from "./service/logger.service";

async function bootstrap() {
	const app = new App(new LoggerService());
	await app.init();
}

bootstrap();
