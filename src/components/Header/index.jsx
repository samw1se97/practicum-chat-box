import React from 'react';
import styles from './styles.module.css';
function Header({ children }) {
  return <header className={styles.header}>{children}</header>;
}

export default Header;
