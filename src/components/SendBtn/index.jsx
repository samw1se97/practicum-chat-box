import React from 'react';
import styles from './styles.module.css';
import { MdSend } from 'react-icons/md';
function SendBtn() {
  return (
    <>
      <button className={styles.sendBtn}>
        <MdSend />
        Send
      </button>
    </>
  );
}

export default SendBtn;
