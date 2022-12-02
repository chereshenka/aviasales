import { format, parseISO } from "date-fns";

export function dateFormating(date, duration) {
  return {
    flyStartTime: format(parseISO(date), "HH':'mm"),
    flyEndTime: format(Date.parse(date) + duration * 60000, "HH':'mm"),
    travelTimeHour: Math.floor((duration / 60) % 60),
    travelTimeMinutes: Math.floor(duration % 60),
  };
}
