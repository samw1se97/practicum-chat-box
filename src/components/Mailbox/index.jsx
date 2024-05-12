import React from 'react';
import styles from './styles.module.css';
import NewMessage from '../NewMessage/index';
import LinkList from '../LinkList/index';
import { IoChevronBack } from 'react-icons/io5';
import { HiOutlineInboxArrowDown } from 'react-icons/hi2';
import { GrSend } from 'react-icons/gr';
import { FaRegStar } from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';
import { MdOutlineDelete } from 'react-icons/md';

function Mailbox() {
  const linkList = [
    {
      name: 'inbox',
      icon: <HiOutlineInboxArrowDown />,
      href: 'http://',
      number: 2,
    },
    { name: 'Sent Emails', icon: <GrSend />, href: 'http://' },
    { name: 'Favorites', icon: <FaRegStar />, href: 'http://' },
    { name: 'Drafts', icon: <GoPencil />, href: 'http://' },
    { name: 'deleted', icon: <MdOutlineDelete />, href: 'http://' },
  ];

  return (
    <div className={styles.wraper}>
      <header className={styles.header}>
        <a>
          <IoChevronBack />
        </a>
        <h2>Mailbox</h2>
      </header>
      <NewMessage />

      <div>
        {linkList.map((link) => (
          <LinkList linkItem={link} />
        ))}
      </div>
    </div>
  );
}

export default Mailbox;
