import axiosInstance from '../lib/axios.instance';
import { LoginSuccess, LoginSignUpFormParams } from 'interfaces/session';

export async function loginAPI(userSignupInfo: LoginSignUpFormParams): Promise<LoginSuccess> {
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

export async function signUpAPI(userSignupInfo: LoginSignUpFormParams): Promise<LoginSuccess> {
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
