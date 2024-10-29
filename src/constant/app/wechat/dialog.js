import { transformObjectToArrayOptions } from '../../../utils/object';

export const WECHAT_DIALOG_MESSAGE_TYPE = {
  TIME: 'time',
  TEXT: 'text',
  IMAGE: 'image',
  VOICE: 'voice',
  SEND_RED_PACKET: 'sendRedPacket',
  RECEIVE_RED_PACKET: 'receiveRedPacket',
  SEND_TRANSFER: 'sendTransfer',
  RECEIVE_TRANSFER: 'receiveTransfer',
};

export const CHAT_TYPE_MAP = {
  Single: 'single',
  Group: 'group',
};

export const CHAT_TYPE_LIST = transformObjectToArrayOptions(CHAT_TYPE_MAP);

export const GROUP_CHAT_MIN_MEMBER_COUNT = 3;

export const DEFAULT_CHAT_TITLE = 'WeChat Dialog';
