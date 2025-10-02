export function logInfo(from: string, message: string) {
	return console.log(`[INFO] `.green + `(${from.toUpperCase()}): `.gray + message);
}

export function logWarning(from: string, message: string) {
	return console.log(`[WARNING] `.yellow + `(${from.toUpperCase()}): `.gray + message);
}

export function logError(from: string, message: string) {
	return console.log(`[ERROR] `.red + `(${from.toUpperCase()}): `.gray + message);
}