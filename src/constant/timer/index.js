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
  SECOND: 'second'
};

export const TIMER_UNIT_LIST = Object.values(TIMER_UNIT_MAP);

export const HOUR_LIST = new Array(24).fill(1).map((_, idx) => prezero(idx));
export const MINUTE_SECOND_LIST = new Array(60).fill(1).map((_, idx) => prezero(idx));
