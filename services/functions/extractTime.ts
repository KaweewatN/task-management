export const ExtractTime = (dateTime: Date) => {
  const date = new Date(dateTime);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

  return formattedTime;
};
