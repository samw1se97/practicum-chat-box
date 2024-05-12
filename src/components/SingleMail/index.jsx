import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { IoMail, IoStar } from 'react-icons/io5';
function SingleMail({ chat }) {
  const { members, msg } = chat.chat;
  const [chatMembers, setChatMembers] = useState([]);
  const [chatMsg, setChatMsg] = useState([]);
  const [chatMsgTime, setChatMsgTime] = useState();

  useEffect(() => {
    const dateObj = new Date(msg.at(-1).date);
    setChatMembers(members);
    setChatMsg(msg);
    setChatMsgTime(`${dateObj.getUTCHours()}:${dateObj.getUTCMinutes()}`);
  }, []);
  console.log('MEMBERS', members);
  console.log('MSG', msg);
  console.log(
    members.map((member) => member.fullName.split(' ')[0]).join(', ')
  );

  return (
    <>
      <div className={styles.message}>
        <div className={styles.pic}>
          <img src={`${members.at(-1).avatar}`} alt='' />
        </div>
        <div className={styles.wrap2}>
          <p className={styles.names}>
            {members.map((member) => member.fullName.split(' ')[0]).join(', ')}
          </p>
          <p className={styles.msgPrev}>{msg.at(-1).content}</p>
        </div>
        <div className={styles.hourWrap}>
          <p className={styles.time}>{chatMsgTime}</p>
          {!chat.isRead ? <IoMail /> : <IoStar />}
        </div>
      </div>
    </>
  );
}

export default SingleMail;
