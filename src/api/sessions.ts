import axiosInstance from '../lib/axios.instance';
import { ILoginSignupResponse, ILoginSignUpFormParams } from 'interfaces/session';

export async function loginAPI(userSignupInfo: ILoginSignUpFormParams): Promise<ILoginSignupResponse> {
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

export async function signUpAPI(userSignupInfo: ILoginSignUpFormParams): Promise<ILoginSignupResponse> {
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
