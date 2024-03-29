import { ISessionAPIResponse } from 'interfaces/api/sessions';
import { ILoginSignUpFormParams } from 'interfaces/session';
import axiosInstance from '../../lib/axios.instance';
import axios from 'axios';

export async function loginAPI(userInfo: ILoginSignUpFormParams): Promise<ISessionAPIResponse> {
  const { email, password } = userInfo;
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

export async function signUpAPI(userInfo: ILoginSignUpFormParams): Promise<ISessionAPIResponse> {
  const { username, email, password } = userInfo;
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

export async function oAuthUserData(): Promise<ISessionAPIResponse> {
  try {
    const res = await axios.get('/auth/user');
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function logoutAPI(): Promise<void> {
  try {
    await axios.get('/logout');
  } catch (error) {
    throw error.response.data;
  }
}
