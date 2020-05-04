import axiosInstance from '../../lib/axios.instance';
import { LoginSuccess } from 'interfaces/login';
import { LoginSignUp } from 'interfaces/signupLogin';

export default async function signUpService(userSignupInfo: LoginSignUp): Promise<LoginSuccess> {
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
