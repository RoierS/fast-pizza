import { ICart } from '@/interfaces/cart';

export const localStorageHelper = (
  key: string,
  action: 'save' | 'load',
  data?: ICart[] | string,
) => {
  if (action === 'save' && data) {
    localStorage.setItem(key, JSON.stringify(data));
    return null;
  }

  if (action === 'load') {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : key === 'cart' ? [] : null;
  }

  return null;
};
