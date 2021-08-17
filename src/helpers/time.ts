import { Logger } from "@/utils";
import moment from "moment";

const logger = new Logger("time helper");

export function getReadableTime(timestamp: number): string {
  logger.info("Formatting time with moment", timestamp);
  return moment(timestamp).format("hh:mm A");
}
