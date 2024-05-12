import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import SingleMail from '../SingleMail';
function MailList() {
  const [chatlist, setChatList] = useState([]);
  useEffect(() => {
    fetch('https://mailbox-server.onrender.com/chat/inbox')
      .then((res) => res.json())
      .then((data) => setChatList(data));
  }, []);
  console.log(chatlist);

  return (
    <div className={styles.mailList}>
      <div className={styles.inputWrap}>
        <input type='text' name='search' placeholder='Search' />
      </div>
      <div className={styles.messagesWrap}>
        {chatlist.map((chat) => (
          <SingleMail key={chat._id} chat={chat} />
        ))}
      </div>
    </div>
  );
}

export default MailList;
