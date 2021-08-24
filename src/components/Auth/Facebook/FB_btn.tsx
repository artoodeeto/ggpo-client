import React, { FC } from 'react';
import styles from './FB_btn.module.scss';

type FbBtnProps = {};

export const FbBtn: FC<FbBtnProps> = () => (
  <a
    className={`${styles.loginBtn} ${styles['loginBtn--facebook']}`}
    href={`${process.env.REACT_APP_BASE_API_URL}/auth/facebook`}
  >
    Login with Facebook
  </a>
);

// const handleLogin = useCallback(() => {
//   async function foo() {
//     try {
//       const response = await fetch('http://localhost:8000/api/v1/auth/facebook', {
//         // headers: {
//         //   'Content-Type': 'application/json',
//         //   'Access-Control-Allow-Origin': '*'
//         // },
//         // referrerPolicy: 'no-referrer',
//         // redirect: 'follow',
//         mode: 'no-cors'
//       });

//       const data = await response.json();
//       console.log({ data });
//     } catch (error) {
//       console.log('ERROR:', error);
//     }
//   }
//   foo();
// }, []);

// return <button onClick={handleLogin}>fb login</button>;
