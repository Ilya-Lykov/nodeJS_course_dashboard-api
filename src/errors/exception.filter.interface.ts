import { NextFunction, Request, Response, Router } from "express";

export interface IExceptionFilter {
	catch: (err: Error, req: Request, res: Response, next: NextFunction) => void;
}
