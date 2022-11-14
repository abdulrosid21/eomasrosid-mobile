import axios from '../../utils/axios';

export const login = data => ({
  type: 'LOGIN',
  payload: async function () {
    return await axios.post('users/login', data);
  },
});
