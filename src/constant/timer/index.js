import dayjs from 'dayjs';
import { getNumArray, transformNumArrayToArrayOptions } from '../../utils/array';
import { prezero } from '../../utils/number';

export const MS_OF_ONE_SECOND = 1000;
export const MS_OF_ONE_MINUTE = 60 * MS_OF_ONE_SECOND;
export const MS_OF_ONE_HOUR = 60 * MS_OF_ONE_MINUTE;
export const MS_OF_ONE_DAY = 24 * MS_OF_ONE_HOUR;
export const MS_OF_ONE_WEEK = 7 * MS_OF_ONE_DAY;
export const MS_OF_ONE_MONTH = 30.436875 * MS_OF_ONE_DAY;
export const MS_OF_ONE_YEAR = 365.25 * MS_OF_ONE_DAY;

export const TIMER_UNIT_MAP = {
  YEAR: 'year',
  MONTH: 'month',
  WEEK: 'week',
  DAY: 'day',
  HOUR: 'hour',
  MINUTE: 'minute',
  SECOND: 'second',
  MILLISECOND: 'ms',
};

export const TIMER_UNIT_LIST = Object.values(TIMER_UNIT_MAP);

export const MONTH_LIST = getNumArray(1, 12, { prezero: true });
export const MONTH_OPTIONS_LIST = transformNumArrayToArrayOptions(MONTH_LIST);

export const WEEK_LIST = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const DAY_HALF_LIST = ['AM', 'PM'];
export const HOUR_LIST = getNumArray(0, 23, { prezero: true });
export const MINUTE_SECOND_LIST = getNumArray(0, 59, { prezero: true });

export const CURRENT_YEAR = new Date().getFullYear();
export const CURRENT_MONTH = new Date().getMonth() + 1;
export const CURRENT_DATE = new Date().getDate();
export const CURRENT_DAY = new Date().getDay();
export const CURRENT_HALF = new Date().getHours() >= 12 ? 1 : 0;
export const CURRENT_HOUR = prezero(new Date().getHours());
export const CURRENT_MINUTE = prezero(new Date().getMinutes());
export const TODAY = `${CURRENT_YEAR}-${prezero(CURRENT_MONTH)}-${prezero(CURRENT_DATE)}`;
export const NOW = dayjs().format('YYYY-MM-DD HH:mm:ss');

export const DEFAULT_TIME_HOUR = '09';
export const DEFAULT_TIME_MINUTE = '00';
