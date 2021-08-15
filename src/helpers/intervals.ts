import { Logger } from "@/utils";

const logger = new Logger("interval logger");

// Creates  a delay for given secnods of time
export function createInterval(seconds: number): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(() => {
      logger.info(`Waited for ${seconds}s`);
      return resolve;
    }, seconds * 1000)
  );
}
