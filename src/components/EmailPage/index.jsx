import React from 'react';
import styles from './styles.module.css';
import MsgLi from '../MsgLi';
import TextArea from '../Textarea';
import { emailPgHdrIcons } from '../../assets/icons/icons';

function EmailPage() {
  return (
    <div className={styles.mailSender}>
      <figure>
        <div>
          <span>Promising offers</span>
        </div>
        <div className={styles.icons}>
          {emailPgHdrIcons &&
            emailPgHdrIcons.map((el) => <el.icon key={el.name} />)}
        </div>
      </figure>
      <div className={styles.chatWrap}>
        <time>Today, 28th March 2024, 09:25</time>
        <h2>Meeting with new investors</h2>
        <MsgLi />
        <MsgLi />
      </div>
      <TextArea />
    </div>
  );
}

export default EmailPage;
