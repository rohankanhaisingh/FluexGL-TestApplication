import express from "express";
import cors from "cors";
import path from "path";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import colors from "colors";
import session from "express-session";
import passport from "passport";
import passportLocal from "passport-local";
import bcrypt from "bcrypt";
import flash from "express-flash";
import fs from "fs";

import { initializeRouter } from "./router";
import { setAssetRoutes } from "./assets";

import { DOTENV_FILE_PATH, PUBLIC_VIEWS_PATH, RESERVED_SERVER_PORT } from "./utilities/constants";

dotenv.config({ path: DOTENV_FILE_PATH });
colors.enable();

(async function () {

	const app = express();
	const router = express.Router();

	app.set("view engine", "ejs");
	app.set("views", PUBLIC_VIEWS_PATH);

	setAssetRoutes(app);
	initializeRouter(router);

	app.use(session({ secret: process.env.SESSION_SECRET || "null", resave: true, saveUninitialized: true }));
	app.use(flash())
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(bodyparser.urlencoded({ extended: true }));
	app.use(bodyparser.json());
	app.use(cors());

	app.use("/", router);

	app.listen(RESERVED_SERVER_PORT, function () {
		console.log(`Server is running on port ${RESERVED_SERVER_PORT}`.green);
	});
})()