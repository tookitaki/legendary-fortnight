import { createPath } from '../utils/general';

const paths = {
  defaultPath: createPath(''),
  dashboard: createPath('dashboard'),
  error: createPath('systemFailure'),
  pipelines: createPath('pipelines')
};

export default paths;
