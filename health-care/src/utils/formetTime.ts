/**
 * Formats an ISO date string or timestamp into a human-readable time format.
 * @param isoString - The ISO date string or timestamp (e.g., "2024-03-22T11:30:00.000Z").
 * @returns A formatted time string (e.g., "11:30 AM"), or "Invalid Date" if the input is not valid.
 */
export const formatTime = (isoString: string): string => {
  const date = new Date(isoString);

  // Validate if the date is valid
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12 || 12; // Convert to 12-hour format, 0 -> 12
  const formattedMinutes = minutes.toString().padStart(2, "0"); // Ensure 2 digits
  const amPm = hours >= 12 ? "PM" : "AM";

  return `${formattedHours}:${formattedMinutes} ${amPm}`;
};
