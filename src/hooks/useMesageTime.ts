import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';

dayjs.extend(isToday);
dayjs.extend(isYesterday);

/**
 * Returns a sent message date text
 * @param messageSendAt ISOString date from a SentMessage
 * @example useMessageDateTime(dayjs().toISOString()) // Today at ..
 */
export default function useMessageDateTime(messageSendAt: string) {
  const isToday = dayjs(messageSendAt).isToday();
  const isYesterday = dayjs(messageSendAt).isYesterday();
  const messageTime = dayjs(messageSendAt).format('h:mm A');
  const messageCalendarDate = dayjs(messageSendAt).format('MM/DD/YYYY');

  if (isToday) return `Today at ${messageTime}`;
  if (isYesterday) return `Yesterday at ${messageTime}`;
  return `${messageCalendarDate} ${messageTime}`;
}
