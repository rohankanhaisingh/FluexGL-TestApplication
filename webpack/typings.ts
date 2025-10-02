import { Compiler, WebpackPluginInstance} from "webpack";

export type WebpackPluginTypeDeclaration = (
	| undefined
	| null
	| false
	| ""
	| 0
	| ((this: Compiler, compiler: Compiler) => void)
	| WebpackPluginInstance
)[];