import path from "path";
import { Options } from "ejs";

export const ROOT_PATH: string = path.join(__dirname, "../../../../");

export const SOURCE_PATH: string = path.join(ROOT_PATH, "src");

export const SERVER_FILES_PATH: string = path.join(SOURCE_PATH, "server");

export const SERVER_DIST_FILES_PATH: string = path.join(SERVER_FILES_PATH, "_dist");

export const PUBLIC_FILES_PATH: string = path.join(SOURCE_PATH, "public");

export const PUBLIC_VIEWS_PATH: string = path.join(PUBLIC_FILES_PATH, "views");

export const PUBLIC_SCRIPTS_PATH: string = path.join(PUBLIC_FILES_PATH, "scripts");

export const PUBLIC_STYLES_PATH: string = path.join(PUBLIC_FILES_PATH, "styles");

export const PUBLIC_ASSETS_PATH: string = path.join(PUBLIC_FILES_PATH, "assets");

export const PUBLIC_DIST_PATH: string = path.join(PUBLIC_FILES_PATH, "_dist");

export const DOTENV_FILE_PATH: string = path.join(ROOT_PATH, ".env");

export const RESERVED_SERVER_PORT: number = 8000;

export const RENDER_OPTIONS: Options = {
	openDelimiter: "{{",
	delimiter: " ",
	closeDelimiter: "}}",
	includer: function (originalPath: string, parsedPath: string) {
		return {
			filename: path.join(PUBLIC_VIEWS_PATH, originalPath + ".ejs"),
		}
	}
}