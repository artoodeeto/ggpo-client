import React, { FC } from 'react';
import SignupLoginForm from 'components/shared/SignupLoginForm/SignupLoginForm';

type LoginProps = {
  isLoggingInOrSigningUp: boolean;
};

export const Login: FC<LoginProps> = ({ isLoggingInOrSigningUp }) => {
  return <SignupLoginForm toLoginOrSignup={isLoggingInOrSigningUp} />;
};
