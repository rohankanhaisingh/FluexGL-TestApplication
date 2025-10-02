import path from "path";
import fs from "fs";
import yaml from "yaml";
import ejs from "ejs";

import { Request, Response, Router } from "express";

import IndexController from "./controllers/IndexController";

export function initializeRouter(router: Router) {

	router.get("/", IndexController);
}