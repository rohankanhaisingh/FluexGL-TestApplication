import colors from "colors";

colors.enable();

export function formatCurrentTime(): string {

    const now = new Date();

    const hours = now.getHours(),
        minutes = now.getMinutes(),
        seconds = now.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
}

export const logInfo = (message: string, from?: string) => console.log(`(${formatCurrentTime()})`.cyan + ` (from: ${from !== undefined ? from : "unknown"}) `.gray + `[INFO]:`.green + " " + message.trim());
export const logError = (message: string, from?: string) => console.log(`(${formatCurrentTime()})`.cyan + ` (from: ${from !== undefined ? from : "unknown"}) `.gray + `[ERROR]:`.red + " " + message.trim());
export const logWarning = (message: string, from?: string) => console.log(`(${formatCurrentTime()})`.cyan + ` (from: ${from !== undefined ? from : "unknown"}) `.gray + `[WARNING]:`.yellow + " " + message.trim());