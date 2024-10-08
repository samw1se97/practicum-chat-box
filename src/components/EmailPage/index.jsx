import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import MsgLi from '../MsgLi';
import TextArea from '../Textarea';
import { emailPgHdrIcons } from '../../assets/icons/icons';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import Header from '../Header';

function EmailPage(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state } = useLocation();
  const [msg, setMsgs] = useState({});
  const { emailId } = useParams();
  // console.log(msg);

  useEffect(() => {
    setMsgs(state.chat);
  }, [state]);

  // date formating function
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleString('en-US', options);
  };

  return (
    <aside className={styles.mailSender}>
      <Header>
        <div className={styles.hdr_content}>
          <div className={styles.lablels}>
            <span>Promising offers</span>
          </div>
          <div className={styles.icons}>
            {emailPgHdrIcons &&
              emailPgHdrIcons.map((el) => (
                <button key={el.name}>
                  <el.icon />
                </button>
              ))}
          </div>
        </div>
      </Header>
      <div className={styles.chatWrap}>
        <time>{formatDate(msg.lastDate)}</time>
        <h2>{msg.subject}</h2>

        {msg.msg &&
          msg.msg.map((m) => (
            <MsgLi key={m._id} data={{ date: m.date, content: m.content }} />
          ))}
        {/* <MsgLi />
        <MsgLi /> */}
      </div>
      <TextArea />
    </aside>
  );
}

export default EmailPage;
