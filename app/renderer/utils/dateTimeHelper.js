import moment from 'moment';
import { DAY_FORMAT, TIME } from '../functionals/Common/constants';

export const startTime = () => {
  return moment(new Date())
    .format(DAY_FORMAT.DATE_TIME_BACK_END_FORMAT)
    .toString();
};

export const endTime = () => {
  return moment(new Date())
    .add(1, 'years')
    .format(DAY_FORMAT.DATE_TIME_BACK_END_FORMAT)
    .toString();
};

export const toUserTime = (dateTime, timezoneOffset) => {
  const offset = timezoneOffset / TIME.ONE_HOUR;
  return moment
    .utc(dateTime)
    .utcOffset(offset)
    .format(DAY_FORMAT.DATE_TIME_BACK_END_FORMAT);
};
