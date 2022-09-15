// 18:00 -> [18, 00] -> 18 * 60 + 00 = 1080
export function convertHourStringToMinutes(time: string) {
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}