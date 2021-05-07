import { isNotNullUndefined } from './utils';

export const createPath = (param) => {
  const basePath = isNotNullUndefined(process.env.BASE_PATH)
    ? process.env.BASE_PATH
    : '/';
  return `${basePath}${param}`;
};

const paths = {
  defaultPath: createPath('/'),
  dashboard: createPath('dashboard'),
  error: createPath('systemFailure')
};

export default paths;
