import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import EmailLi from '../EmailLi';

function MailList() {
  const [chatlist, setChatList] = useState([]);
  useEffect(() => {
    fetch('https://mailbox-server.onrender.com/chat/inbox')
      .then((res) => res.json())
      .then((data) => setChatList(data));
  }, []);

  return (
    <div className={styles.mailList}>
      <div className={styles.inputWrap}>
        <input type='text' name='search' placeholder='Search' />
      </div>
      <div className={styles.messagesWrap}>
        {chatlist.map((chat) => (
          <EmailLi key={chat._id} chat={chat} />
        ))}
      </div>
    </div>
  );
}

export default MailList;
