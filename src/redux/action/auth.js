import axios from '../../utils/axios';
export const LOGIN = 'LOGIN';
export const login = data => ({
  type: 'LOGIN',
  payload: axios.post('users/login', data),
});
