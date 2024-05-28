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
import { HiOutlineInboxArrowDown } from 'react-icons/hi2';
import { GoPencil } from 'react-icons/go';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function EmailsNav() {
  const navigate = useNavigate();
  const linkList = [
    {
      name: 'inbox',
      icon: <HiOutlineInboxArrowDown />,
      href: 'inbox',
      number: 2,
    },
    { name: 'Sent Emails', icon: <IoIosSend />, href: 'sent' },
    { name: 'Favorites', icon: <IoIosStar />, href: 'favorites' },
    { name: 'Drafts', icon: <GoPencil />, href: '/' },
    { name: 'Deleted', icon: <IoIosTrash />, href: '/' },
    { name: 'More', icon: <IoIosArrowDown />, href: '/' },
  ];

  return (
    <div className={styles.wraper}>
      <div className={styles.main}>
        <figure>
          <button onClick={() => navigate('/')}>
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
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `${styles.active}` : ''
                    }
                    state={el.href}
                    to={el.href}>
                    {el.icon}
                    <span>{el.name}</span>
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <Outlet />
      {/* <MailList /> */}
    </div>
  );
}

export default EmailsNav;
