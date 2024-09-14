import { MS_OF_ONE_DAY, MS_OF_ONE_HOUR, MS_OF_ONE_MINUTE, MS_OF_ONE_MONTH, MS_OF_ONE_SECOND, MS_OF_ONE_WEEK, MS_OF_ONE_YEAR } from '../../constant/timer';

export const calcDiffTime = (diff, ...units) => {
  let year = 0;
  let month = 0;
  let week = 0;
  let day = 0;
  let hour = 0;
  let minute = 0;
  let second = 0;

  if (!diff) return { year, month, week, day, hour, minute, second };

  const unitsMap = {};

  units.forEach(unit => {
    unitsMap[unit] = 1;
  });

  let rest = diff;

  if (unitsMap.year) {
    year = Math.floor(rest / MS_OF_ONE_YEAR);
    rest %= MS_OF_ONE_YEAR;
  }

  if (unitsMap.month) {
    month = Math.floor(rest / MS_OF_ONE_MONTH);
    rest %= MS_OF_ONE_MONTH;
  }

  if (unitsMap.week) {
    week = Math.floor(rest / MS_OF_ONE_WEEK);
    rest %= MS_OF_ONE_WEEK;
  }

  if (unitsMap.day) {
    day = Math.floor(rest / MS_OF_ONE_DAY);
    rest %= MS_OF_ONE_DAY;
  }

  if (unitsMap.hour) {
    hour = Math.floor(rest / MS_OF_ONE_HOUR);
    rest %= MS_OF_ONE_HOUR;
  }

  if (unitsMap.minute) {
    minute = Math.floor(rest / MS_OF_ONE_MINUTE);
    rest %= MS_OF_ONE_MINUTE;
  }
  
  if (unitsMap.second) {
    second = Math.floor(rest / MS_OF_ONE_SECOND);
  }

  return {
    year,
    month,
    week,
    day,
    hour,
    minute,
    second,
  };
};
