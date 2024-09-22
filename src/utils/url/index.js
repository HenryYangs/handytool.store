import { ROUTER } from '../../constant/router';

export const processUrl = (isWIP, url) => {
  return isWIP ? ROUTER.WIP : url;
}

export const processToolUrl = (item) => {
  return processUrl(item.isWIP, `/tool/${item.category}/${item.id}`);
};

export const parseSearch = (rawSearch) => {
  if (!rawSearch) {
    rawSearch = window.location.search;
  }

  const search = rawSearch.replace(/^\?/, '');
  const searchArr = search.split('&');
  const result = {};

  searchArr.forEach(item => {
    const [key, value] = item.split('=');

    result[key] = value;
  });

  return result;
};

