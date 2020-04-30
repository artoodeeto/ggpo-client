import axiosInstance from '../lib/axios.instance';
import { User } from 'interfaces/user';
import { LoginSignUp } from 'interfaces/signupLogin';

export default async function loginService(userSignupInfo: LoginSignUp): Promise<User | undefined> {
  const { email, password } = userSignupInfo;
  try {
    return await axiosInstance.post('/login', {
      email,
      password
    });
  } catch (error) {}
}
