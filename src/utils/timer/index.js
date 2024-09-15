import { MS_OF_ONE_DAY, MS_OF_ONE_HOUR, MS_OF_ONE_MINUTE, MS_OF_ONE_MONTH, MS_OF_ONE_SECOND, MS_OF_ONE_WEEK, MS_OF_ONE_YEAR, TIMER_UNIT_MAP } from '../../constant/timer';
import { cancelLoop, loop } from '../browser';

export const calcDiffTime = (diff, ...units) => {
  let year = 0;
  let month = 0;
  let week = 0;
  let day = 0;
  let hour = 0;
  let minute = 0;
  let second = 0;

  if (!diff) {
    return {
      [TIMER_UNIT_MAP.YEAR]: year,
      [TIMER_UNIT_MAP.MONTH]: month,
      [TIMER_UNIT_MAP.WEEK]: week,
      [TIMER_UNIT_MAP.DAY]: day,
      [TIMER_UNIT_MAP.HOUR]: hour,
      [TIMER_UNIT_MAP.MINUTE]: minute,
      [TIMER_UNIT_MAP.SECOND]: second,
    };
  }

  const unitsMap = {};

  units.forEach(unit => {
    unitsMap[unit] = 1;
  });

  let rest = diff;

  if (unitsMap[TIMER_UNIT_MAP.YEAR]) {
    year = Math.floor(rest / MS_OF_ONE_YEAR);
    rest %= MS_OF_ONE_YEAR;
  }

  if (unitsMap[TIMER_UNIT_MAP.MONTH]) {
    month = Math.floor(rest / MS_OF_ONE_MONTH);
    rest %= MS_OF_ONE_MONTH;
  }

  if (unitsMap[TIMER_UNIT_MAP.WEEK]) {
    week = Math.floor(rest / MS_OF_ONE_WEEK);
    rest %= MS_OF_ONE_WEEK;
  }

  if (unitsMap[TIMER_UNIT_MAP.DAY]) {
    day = Math.floor(rest / MS_OF_ONE_DAY);
    rest %= MS_OF_ONE_DAY;
  }

  if (unitsMap[TIMER_UNIT_MAP.HOUR]) {
    hour = Math.floor(rest / MS_OF_ONE_HOUR);
    rest %= MS_OF_ONE_HOUR;
  }

  if (unitsMap[TIMER_UNIT_MAP.MINUTE]) {
    minute = Math.floor(rest / MS_OF_ONE_MINUTE);
    rest %= MS_OF_ONE_MINUTE;
  }
  
  if (unitsMap[TIMER_UNIT_MAP.SECOND]) {
    second = Math.floor(rest / MS_OF_ONE_SECOND);
  }

  return {
    [TIMER_UNIT_MAP.YEAR]: year,
    [TIMER_UNIT_MAP.MONTH]: month,
    [TIMER_UNIT_MAP.WEEK]: week,
    [TIMER_UNIT_MAP.DAY]: day,
    [TIMER_UNIT_MAP.HOUR]: hour,
    [TIMER_UNIT_MAP.MINUTE]: minute,
    [TIMER_UNIT_MAP.SECOND]: second,
  };
};

let loopId = 0;

export const onUpdateClock = ({ targetTimestamp, units, callback, timeType }) => {
  cancelLoop(loopId);

  const now = Date.now();
  const duration = calcDiffTime(timeType === 'past' ? (now - targetTimestamp) : (targetTimestamp - now), ...units);
  let isContinue;

  if (Object.values(duration).filter((val) => val < 0).length) {
    isContinue = callback && callback({
      [TIMER_UNIT_MAP.YEAR]: 0,
      [TIMER_UNIT_MAP.MONTH]: 0,
      [TIMER_UNIT_MAP.WEEK]: 0,
      [TIMER_UNIT_MAP.DAY]: 0,
      [TIMER_UNIT_MAP.HOUR]: 0,
      [TIMER_UNIT_MAP.MINUTE]: 0,
      [TIMER_UNIT_MAP.SECOND]: 0,
    }, { isEnd: true });
  } else {
    isContinue = callback && callback(duration, { isEnd: false });
  }

  if (isContinue !== false) {
    loop(() => onUpdateClock({ targetTimestamp, units, callback, timeType }));
  }
};
