import React, { FC, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataFromOAuth } from 'store/session/Actions';
import { isUserAuthorized } from 'store/session/Selectors';
import { Redirect } from 'react-router-dom';

const hasCookie = Cookies.get(process.env.REACT_APP_COOKIE_NAME as string);

type InterceptAuthProps = {};

/**
 * This component is used to intercept the authentication process
 * because passport facebook will have CORS error if called thru the browser.
 *
 * Please see backend passport-auth_controller file for more details.
 *
 * **/
const InterceptAuth: FC<InterceptAuthProps> = () => {
  // TODO: Check onload if its from redirection or directly pasted link on browser
  // https://stackoverflow.com/questions/36522178/detect-if-page-was-redirected-or-loaded-directlyjavascript
  const dispatch = useDispatch();
  const isAuth = useSelector(isUserAuthorized);

  useEffect(() => {
    if (!isAuth && hasCookie) dispatch(getUserDataFromOAuth());
  }, [dispatch, isAuth]);

  return isAuth ? <Redirect to="/feed" /> : <Redirect to="/" />;
};

export default InterceptAuth;

// This returns error because of CORS. Because of facebook callback.
// Not deleting this because im still hoping for this to work. lols

// return <button onClick={() => dispatch(getUserDataFromOAuth())}>test</button>;
// const tok = Cookies.get('ggpo_token');
// // ? should check token here????

// async function t() {
//   const data = await fetch('http://localhost:8000/api/v1/auth/test', {
//     headers: {
//       Authorization: `Bearer ${tok}`
//     }
//   });
// }
// t();
