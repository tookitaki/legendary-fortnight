import axios from 'axios';

export const request = async ({ method = 'get', url, data, headers = {} }) => {
  const dataField = method === 'get' ? 'params' : 'data';

  try {
    const response = await axios({
      method,
      url,
      [dataField]: data,
      headers
    });

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
