import dayjs from 'dayjs';

export const getRandomBillId = () => {
  const today = dayjs().format('YYYYMMDD');
  const billId = `10000501012${today}${Math.floor(Math.random()*100000000000000)}`;

  return billId;
}