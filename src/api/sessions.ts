import axiosInstance from '../lib/axios.instance';
import { LoginSignupResponse, LoginSignUpFormParams } from 'interfaces/session';

export async function loginAPI(userSignupInfo: LoginSignUpFormParams): Promise<LoginSignupResponse> {
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

export async function signUpAPI(userSignupInfo: LoginSignUpFormParams): Promise<LoginSignupResponse> {
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
