import isNil from 'lodash/isNil';

export const createPath = (param) => {
  const basePath = !isNil(process.env.BASE_PATH) ? process.env.BASE_PATH : '/';
  return `${basePath}${param}`;
};

const paths = {
  defaultPath: createPath(''),
  dashboard: createPath('dashboard'),
  error: createPath('systemFailure')
};

export default paths;
