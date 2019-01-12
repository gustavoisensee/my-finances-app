import { post } from './base';

export const create = ({ name, email, password }) => {
  const path = 'account/create';
  const params = {
    name,
    email,
    password
  };

  return post(path, params);
}

export const login = ({ email, password }) => {
  const path = 'account/login';
  const params = {
    email,
    password
  };

  return post(path, params);
}