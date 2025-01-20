function formatDate(dateToFormat) {
  const MINUTE_PER_HOURS = 60;
  const offsetMinutes = dateToFormat.getTimezoneOffset();
  const offsetHours = Math.abs(Math.floor(offsetMinutes / MINUTE_PER_HOURS));
  const offsetMinutesRemainder = Math.abs(offsetMinutes) % MINUTE_PER_HOURS;
  const offsetSign = offsetMinutes < 0 ? "+" : "-";

  const formattedDate = `${dateToFormat.getFullYear()}-${String(
    dateToFormat.getMonth() + 1,
  ).padStart(2, "0")}-${String(dateToFormat.getDate()).padStart(
    2,
    "0",
  )}T${String(dateToFormat.getHours()).padStart(2, "0")}:${String(
    dateToFormat.getMinutes(),
  ).padStart(2, "0")}:${String(dateToFormat.getSeconds()).padStart(
    2,
    "0",
  )}${offsetSign}${String(offsetHours).padStart(2, "0")}${String(
    offsetMinutesRemainder,
  ).padStart(2, "0")}`;

  return formattedDate;
}

export default formatDate;
