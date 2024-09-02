import { ROUTER } from '../../constant/router';

export const processUrl = (isWIP, url) => {
  return isWIP ? ROUTER.WIP : url;
}

export const processToolUrl = (item) => {
  return processUrl(item.isWIP, `/tool/${item.category}/${item.id}`);
};
