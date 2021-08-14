import moment from "moment";

export function getReadableTime(timestamp: number): string {
  return moment(timestamp).format("hh:mm A");
}
