import axiosInstance from '../lib/axios.instance';
import { User } from 'interfaces/user';
import { LoginSignUp } from 'interfaces/signupLogin';

export default async function signUpService(userSignupInfo: LoginSignUp): Promise<User | undefined> {
  const { username, email, password } = userSignupInfo;
  try {
    return await axiosInstance.post('/signup', {
      username,
      email,
      password
    });
  } catch (error) {}
}
