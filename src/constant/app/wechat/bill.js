import { getRandomBillId } from '../../../utils/app/wechat/bill';
import { DEFAULT_AVATAR } from '../../icon';
import { NOW } from '../../timer';

export const BILL_PAGE_TYPE = {
  PAYMENT: 'PAYMENT',
  PAYEE: 'PAYEE',
}

export const BILL_TYPE_LIST = [
  {
    value: BILL_PAGE_TYPE.PAYMENT,
    label: '转账',
  },
  {
    value: BILL_PAGE_TYPE.PAYEE,
    label: '收款',
  },
];

export const DEFAULT_WECHAT_BILL_CONFIG = {
  avatar: DEFAULT_AVATAR,
  amount: 520,
  billStatus: '朋友已收钱',
  billDescription: '购买水果',
  billTransferTime: NOW,
  billReceiveTimer: NOW,
  billPaymentMethod: '零钱',
  billId: getRandomBillId(),
};
