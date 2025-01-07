export const getTimeIn12HourFormat = (dateTimeString: string): string => {
  const date: Date = new Date(dateTimeString);
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  const ampm: string = hours >= 12 ? "PM" : "AM";
  const formattedHours: number = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes: string =
    minutes < 10 ? "0" + minutes : minutes.toString();
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};
