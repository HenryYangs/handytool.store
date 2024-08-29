import { ROUTER } from '../../../constant/router';

export const HEADER_ENTRIES = [
  {
    text: 'Home',
    redirectUrl: ROUTER.HOME,
    icon: 'home',
  },
  {
    text: 'Favorite',
    redirectUrl: ROUTER.FAVORITE,
    icon: 'heart',
    isWIP: true,
  },
  {
    text: 'Recent',
    redirectUrl: ROUTER.RECENT,
    icon: 'recent',
    isWIP: true,
  },
  {
    text: 'Message',
    redirectUrl: ROUTER.MESSAGE,
    icon: 'message',
    isWIP: true,
  },
];
