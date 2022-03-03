import axios from 'axios';
import { IUser } from './action';

const register = async (userData: IUser) => {
  const response = await axios.post('/api/user/register', userData);
  // if (response.data) {
  //   localStorage.setItem('user', JSON.stringify(response.data));
  // }
  return response.data;
};

const login = async (userData: Partial<IUser>) => {
  const response = await axios.post('/api/user/login', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.remove('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
