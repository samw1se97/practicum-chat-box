import React from 'react';
import styles from './styles.module.css';
import { IoMailOutline } from 'react-icons/io5';
function NewMsgBtn() {
  return (
    <a className={styles.link}>
      <IoMailOutline />
      <p>New message</p>
    </a>
  );
}

export default NewMsgBtn;
