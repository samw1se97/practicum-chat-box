import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import EmailLi from '../EmailLi';
import EmailPage from '../EmailPage';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';

function MailList() {
  const { pathname } = useLocation();
  const [curLocation, setCurLocation] = useState(pathname.split('/').pop());
  const [chatlist, setChatList] = useState([]);

  useEffect(() => {
    fetch(`https://mailbox-server.onrender.com/chat/${curLocation}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => setChatList(data))
      .catch((err) => console.log(err));
  }, [curLocation]);

  return (
    <div className={styles.mailList}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <Header>
            <div className={styles.hdr_content}>
              <input type='text' placeholder='search...' />
            </div>
          </Header>
          <div className={styles.messages}>
            {chatlist.map((chat) => (
              <EmailLi key={chat._id} chat={chat} />
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default MailList;





