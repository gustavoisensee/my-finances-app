const apiUrl = 'https://app-timer-api-rf9ng8k2c.now.sh/';

const createUrl = (path) => `${apiUrl}${path}`;

const defaultOptions = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
};

export const post = (path, params, pOptions = {}) => {
  const options = {
    method: 'POST',
    ...defaultOptions,
    ...pOptions,
    body: JSON.stringify(params)
  };
  
  return fetch(
    createUrl(path),
    options
  );
};

