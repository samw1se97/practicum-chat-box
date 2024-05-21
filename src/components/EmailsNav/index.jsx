import React from 'react';
import styles from './styles.module.css';
import NewMsgBtn from '../NewMsgBtn/index';
import { IoChevronBack } from 'react-icons/io5';
import {
  IoIosArrowDown,
  IoIosSend,
  IoIosStar,
  IoIosTrash,
} from 'react-icons/io';
import { HiOutlineInboxArrowDown, HiOutlineStar } from 'react-icons/hi2';
import { GoPencil } from 'react-icons/go';

function EmailsNav() {
  const linkList = [
    {
      name: 'inbox',
      icon: <HiOutlineInboxArrowDown />,
      href: 'http://',
      number: 2,
    },
    { name: 'Sent Emails', icon: <IoIosSend />, href: 'http://' },
    { name: 'Favorites', icon: <IoIosStar />, href: 'http://' },
    { name: 'Drafts', icon: <GoPencil />, href: 'http://' },
    { name: 'Deleted', icon: <IoIosTrash />, href: 'http://' },
    { name: 'More', icon: <IoIosArrowDown />, href: 'http://' },
  ];

  return (
    <div className={styles.wraper}>
      <div className={styles.main}>
        <figure>
          <button>
            <IoChevronBack />
          </button>
          <h2>Mailbox</h2>
        </figure>
        <NewMsgBtn />

        <nav>
          <ul className={styles.linkList}>
            {linkList &&
              linkList.map((el) => (
                <li key={el.name}>
                  <a>
                    {el.icon}
                    <span>{el.name}</span>
                  </a>
                </li>
              ))}
          </ul>
        </nav>

        {/* 
        <div>
          {linkList.map((link) => (
            <a href={link.href} className={styles.singleLink}>
              <span>{link.icon}</span>
              <p>{link.name}</p>
              {link.number && (
                <span className={`${styles.badge} ${styles.isActive}`}>
                  {link.number}
                </span>
              )}
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default EmailsNav;
