import isNil from 'lodash/isNil';

export const createPath = (param) => {
  const basePath = !isNil(process.env.BASE_PATH) ? process.env.BASE_PATH : '/';
  return `${basePath}${param}`;
};

export const setItemToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getItemFromLocalStorage = (key) => {
  localStorage.getItem(key);
};

export const removeItemFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
