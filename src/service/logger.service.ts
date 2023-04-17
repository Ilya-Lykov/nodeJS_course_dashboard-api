import { Logger, ILogObj } from "tslog";

export class LoggerService {
	public logger: Logger<ILogObj>;

	constructor() {
		this.logger = new Logger<ILogObj>({
			type: "pretty",
			prettyLogStyles: {
				filePathWithLine: "blue",
				name: ["yellow", "bold"],
			},
		});
	}

	log(...args: unknown[]) {
		this.logger.info(...args);
	}
	error(...args: unknown[]) {
		this.logger.info(...args);
	}
	warn(...args: unknown[]) {
		this.logger.info(...args);
	}
}
