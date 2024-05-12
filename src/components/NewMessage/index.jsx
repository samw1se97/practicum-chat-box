import React from 'react';
import styles from './styles.module.css';
import { IoMailOutline } from 'react-icons/io5';
function index() {
  return (
    <a className={styles.link}>
      <span>
        <IoMailOutline />
      </span>
      <p>New message</p>
    </a>
  );
}

export default index;
