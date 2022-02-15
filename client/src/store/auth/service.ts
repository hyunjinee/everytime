import axios from 'axios';

interface IUser {
  id: string;
  password: string;
  school: string;
  entranceYear: string;
}

const register = async (userData: IUser) => {
  const response = await axios.post(
    'http://localhost:3001/api/user/register',
    userData
  );

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData: Partial<IUser>) => {
  const response = await axios.post('http://localhost:3001/api/user/login');

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
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
