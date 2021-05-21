import isNil from 'lodash/isNil';

export const createPath = (param) => {
  const basePath = !isNil(process.env.BASE_PATH) ? process.env.BASE_PATH : '/';
  return `${basePath}${param}`;
};
