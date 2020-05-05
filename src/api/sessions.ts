import axiosInstance from '../lib/axios.instance';
import { LoginSuccess } from 'interfaces/login';
import { LoginSignUp } from 'interfaces/signupLogin';

export async function loginAPI(userSignupInfo: LoginSignUp): Promise<LoginSuccess> {
  const { email, password } = userSignupInfo;
  try {
    const res = await axiosInstance.post('/login', {
      email,
      password
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function signUpAPI(userSignupInfo: LoginSignUp): Promise<LoginSuccess> {
  const { username, email, password } = userSignupInfo;
  try {
    const res = await axiosInstance.post('/signup', {
      username,
      email,
      password
    });
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}
