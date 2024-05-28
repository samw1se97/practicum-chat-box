import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { IoMail, IoStar } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

function EmailLi({ chat }) {
  const { members, msg } = chat.chat;
  const [chatData, setChatData] = useState({chatID: chat._id, subject: chat.chat.subject, msg:[{}]})
  const [chatMembers, setChatMembers] = useState([]);
  const [chatMsg, setChatMsg] = useState([]);
  const [chatMsgTime, setChatMsgTime] = useState();

  useEffect(() => {
    const dateObj = new Date(msg.at(-1).date);
    setChatMembers(members);
    setChatMsg(msg);
    const hour = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();
    setChatMsgTime(
      `${hour < 10 ? '0' + hour : hour}:${
        minutes < 10 ? '0' + minutes : minutes
      }`
    );
  }, []);
// console.log(chatData);
  
  
  // console.log('MEMBERS', members);
  // console.log('MSG', msg);
  // console.log(
  //   members.map((member) => member.fullName.split(' ')[0]).join(', ')
  // );

  // console.log(chat._id);
  return (
    <NavLink state={{chat: chat.chat}}  to={chat._id} className={styles.emailLi}>
      <img src={`${members.at(-1).avatar}`} alt='' />
      <article>
        <p>
          <FormatNames members={members} />
        </p>
        <span>{msg.at(-1).content}</span>
      </article>{' '}
      <div>
        <time>{chatMsgTime}</time>
        {!chat.isRead ? <IoMail /> : <IoStar />}
      </div>
    </NavLink>
  );
}

const FormatNames =({ members }) => {
  const generatenames = (members) => {
    let firstNames = members.map((member) => member.fullName.split(' ')[0]);
    if (members.length <= 2) {
      return firstNames.join(', ');
    }

    const firstTwoMembers = firstNames.slice(0, 2).join(', ');
    const remainingCount = firstNames.length - 2;

    return `${firstTwoMembers} +${remainingCount}`;
  };

  return generatenames(members);
}
// {members.map((member) => member.fullName.split(' ')[0]).join(', ')}
export default EmailLi;
