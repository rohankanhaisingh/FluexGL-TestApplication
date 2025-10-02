import express, { Express } from "express";
import path from "path";
import fs from "fs";

import { PUBLIC_ASSETS_PATH, PUBLIC_DIST_PATH } from "./utilities/constants";

export function setAssetRoutes(app: Express) {

	app.use("/assets/images", express.static(path.join(PUBLIC_ASSETS_PATH, "images")));
	app.use("/assets/videos", express.static(path.join(PUBLIC_ASSETS_PATH, "videos")));
	app.use("/assets/icons", express.static(path.join(PUBLIC_ASSETS_PATH, "icons")));
	app.use("/assets/textures", express.static(path.join(PUBLIC_ASSETS_PATH, "textures")));
	app.use("/assets/font-families", express.static(path.join(PUBLIC_ASSETS_PATH, "font-families")));
	app.use("/assets/data", express.static(path.join(PUBLIC_ASSETS_PATH, "data")));

	app.use("/assets/dist", express.static(path.join(PUBLIC_DIST_PATH)));
}