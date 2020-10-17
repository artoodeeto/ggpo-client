import React, { FC } from 'react';
import SignupLoginForm from 'components/shared/SignupLoginForm/SignupLoginForm';

type SignupProps = {
  isLoggingInOrSigningUp: boolean;
};

export const Signup: FC<SignupProps> = ({ isLoggingInOrSigningUp }) => {
  return <SignupLoginForm toLoginOrSignup={isLoggingInOrSigningUp} />;
};
