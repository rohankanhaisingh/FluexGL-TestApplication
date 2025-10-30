import fs from "fs";
import path from "path";

import constants from "./constants";
import { logInfo, logWarning } from "./utilities";

export type ScriptEntries = { [K: string]: string };

export default function analyseCorrespondingScripts(): ScriptEntries {

	const scriptEntries: ScriptEntries = {};

	const ejsViewFiles: string[] = fs.readdirSync(constants.VIEWS_PATH, "utf-8");

	logInfo(`${ejsViewFiles.length.toString().yellow} files found in ${constants.VIEWS_PATH.toString().yellow}.`);

	for (let file of ejsViewFiles) {

		if (file.endsWith(".ejs")) {

			const pageName: string = file.split(".ejs")[0].toLowerCase();

			const physicalScriptDirectoryPath: string = path.join(constants.SCRIPTS_PATH, "entries", "entry@" + pageName);

			if (fs.existsSync(physicalScriptDirectoryPath)) {

				const correspondingScriptPath: string = path.join(physicalScriptDirectoryPath, "entry.ts");

				if (fs.existsSync(correspondingScriptPath)) {

					scriptEntries[pageName] = correspondingScriptPath;
					logInfo(`File '${pageName}' added to list of entries.`, "Script analyser");
				} else {
					logWarning(`File '${pageName}' has no associated 'entry.ts' file located in ${physicalScriptDirectoryPath}.`, "Script analyser")
				}
			} else {
				logWarning(`File '${pageName}' has no associated script file in ${constants.SCRIPTS_PATH}.`);
			}
		}
	}

	return scriptEntries;
}