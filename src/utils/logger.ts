/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
type LogType = "debug" | "info" | "warn" | "error";

export class Logger {
  private scope: string;

  constructor(scope: string) {
    this.scope = scope;
  }

  debug(message: string, ...data: any): void {
    this.logMessage("debug", message, data);
  }

  info(message: string, ...data: any): void {
    this.logMessage("info", message, data);
  }

  warn(message: string, ...data: any): void {
    this.logMessage("warn", message, data);
  }

  error(message: string, ...data: any): void {
    this.logMessage("error", message, data);
  }

  private logMessage(
    messageType: LogType,
    message: string,
    data?: any[]
  ): void {
    console[messageType]({
      scope: this.scope,
      time: new Date().toISOString(),
      type: messageType,
      message,
      data,
    });
  }
}
