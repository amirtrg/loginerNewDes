import React, { useState } from 'react';

import styles from './Login.module.scss';

const Login = props => {
  const [validEmail, setValidEmail] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [msg, setMsg] = useState();
  const emailhandler = e => {
    (e.target.value.trim().length > 7 && e.target.value.includes('@'))
      ? setValidEmail(true)
      : setValidEmail(false);
  };
  const passwordHandler = e => {
   (e.target.value.trim().length > 7)?setValidPass(true):setValidPass(false)
  };

  const loginHandler = e => {
    e.preventDefault();
    (validEmail && validPass) && props.onLogin();
    setMsg(
      <>
        {!validEmail && <li>invlid email address</li>}
        {!validPass && <li> please enter your password corrctly</li>}
      </>
    );
  };

  return (
    <main className={styles.Login}>
      <form onSubmit={loginHandler}>
        <input type="text" placeholder="email" onChange={emailhandler} />
        <input
          type="password"
          placeholder="password"
          onChange={passwordHandler}
        />
        <button type="submit">login</button>
        <ul className={styles.msg}>{msg}</ul>
      </form>
    </main>
  );
};
export default Login;
