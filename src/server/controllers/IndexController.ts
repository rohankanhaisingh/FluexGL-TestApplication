import path from "path";
import ejs from "ejs";
import { Request, Response, NextFunction } from "express";

import { PUBLIC_DIST_PATH, RENDER_OPTIONS } from "../utilities/constants";

export const view: string = path.join(PUBLIC_DIST_PATH, "index.ejs");

export default function IndexController(req: Request, res: Response, next: NextFunction) {

	const data = {};

	ejs.renderFile(view, data, RENDER_OPTIONS)
		.then(function (html: string) {
			return res.status(200).send(html);
		})
		.catch(function (err: Error) {
			console.log(err.message);
			return res.status(501).send(err);
		});
}