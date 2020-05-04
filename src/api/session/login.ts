import axiosInstance from '../../lib/axios.instance';
import { LoginSuccess } from 'interfaces/login';
import { LoginSignUp } from 'interfaces/signupLogin';

export default async function loginService(userSignupInfo: LoginSignUp): Promise<LoginSuccess> {
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
