import React, { FC, Fragment } from 'react';
import styles from './LoginSignupSliderButton.module.scss';

type LoginSignupSliderButtonProps = {
  toShow: (val: boolean) => void;
};

export const LoginSignupSliderButton: FC<LoginSignupSliderButtonProps> = ({ toShow }) => {
  return (
    <Fragment>
      <button className={styles.SliderBtn} type="button" onClick={() => toShow(true)}>
        Already a User?
      </button>
      <button className={styles.SliderBtn} type="button" onClick={() => toShow(false)}>
        New User
      </button>
    </Fragment>
  );
};
