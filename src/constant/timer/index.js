import { getNumArray } from '../../utils/array';
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

export const WEEK_LIST = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const DAY_HALF_LIST = ['AM', 'PM'];
export const HOUR_LIST = getNumArray(0, 23, { prezero: true });
export const MINUTE_SECOND_LIST = getNumArray(0, 59, { prezero: true });

export const CURRENT_YEAR = new Date().getFullYear();
export const CURRENT_MONTH = new Date().getMonth() + 1;
export const CURRENT_DAY = new Date().getDate();
export const TODAY = `${CURRENT_YEAR}-${prezero(CURRENT_MONTH)}-${prezero(CURRENT_DAY)}`;
