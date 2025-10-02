import path from "path";
import url from "url";

namespace Constants {

	export const ROOT_PATH: string = path.join(__dirname, "../../");

	export const SOURCE_PATH: string = path.join(ROOT_PATH, "src");

	export const PUBLIC_PATH: string = path.join(SOURCE_PATH, "public");

	export const VIEWS_PATH: string = path.join(PUBLIC_PATH, "views");

	export const SCRIPTS_PATH: string = path.join(PUBLIC_PATH, "scripts");

	export const URL_VIRTUAL_ASSETS_PATH: string = "/assets";

	export const DIST_PATH: string = path.join(PUBLIC_PATH, "_dist");
}

export default Constants;