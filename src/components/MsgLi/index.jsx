import React, { useState } from 'react';
import styles from './styles.module.css';

function MsgLi({ data }) {
  const [openSub, setOpenSub] = useState(false);
  const [msgData, setMsgData] = useState(data);
  console.log(data);

  // date formating function
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const dateOptions = {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };

    // Options for formatting the time part
    const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    const formattedDate = date.toLocaleDateString('en-GB', dateOptions); // en-GB for DD/MM/YYYY format
    const formattedTime = date.toLocaleTimeString('en-GB', timeOptions); // en-GB for 24-hour format
    return `${formattedDate}, ${formattedTime}`;
  };
  return (
    <details className={styles.msgDetails}>
      <summary>
        <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=PastelGreen&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Tanned' />
        <h4>Israel Israeli</h4>
        <p>- {msgData.content}</p>
        <time>{formatDate(msgData.date)}</time>
      </summary>
      <p>{msgData.content}</p>
    </details>
  );
}

export default MsgLi;
