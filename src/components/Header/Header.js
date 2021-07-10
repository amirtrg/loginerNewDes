import React, { useState } from 'react';
import styles from './Header.module.scss';
const Header = props => {
  const logOutHandler = () => {
    props.onLogOut();
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuHandler = () => {
    setIsMenuOpen(true);
  };

  const loggedIn = (
    <>
      <h1>home</h1>
      <nav>
        <a href="#">
          home
        </a>
        <a href="#">
          developes
        </a>
        <a href="#" onClick={menuHandler}>
          menu
        </a>
      </nav>
      {isMenuOpen && (
        <div
          className={styles.menu}
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <ul>
            <li>
              <a href="#">contact us</a>
            </li>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#login" onClick={logOutHandler}>
                log out
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
  const NotLoggedIn = (
    <>
      <h1>login</h1>
    </>
  );
  return (
    <header className={styles.HeaderApp}>
      {props.Login ? loggedIn : NotLoggedIn}
    </header>
  );
};

export default Header;
