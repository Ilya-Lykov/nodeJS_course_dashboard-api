import { Container } from "inversify";
import { App } from "./app";
import { ExceptionFilter } from "./errors/exception.filter";
import { LoggerService } from "./service/logger.service";
import { UserController } from "./users/user.controller";
import { TYPES } from "./types";
import { ILogger } from "./service/logger.interface";
import { IExceptionFilter } from "./errors/exception.filter.interface";

// const logger = new LoggerService();
// const app = new App(
// 	logger,
// 	new UserController(logger),
// 	new ExceptionFilter(logger)
// );
const appContainer = new Container();
appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService);
appContainer.bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter);
appContainer.bind<UserController>(TYPES.UserController).to(UserController);
appContainer.bind<App>(TYPES.Application).to(App);

const app = appContainer.get<App>(TYPES.Application);
app.init();

export { app, appContainer };
