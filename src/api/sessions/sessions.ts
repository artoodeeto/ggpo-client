import axiosInstance from '../../lib/axios.instance';
import { ISessionAPIResponse } from 'interfaces/api/sessions';
import { ILoginSignUpFormParams } from 'interfaces/session';

export async function loginAPI(userSignupInfo: ILoginSignUpFormParams): Promise<ISessionAPIResponse> {
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

export async function signUpAPI(userSignupInfo: ILoginSignUpFormParams): Promise<ISessionAPIResponse> {
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
