import React from 'react';
import { CiStar } from 'react-icons/ci';
import { IoMdPrint } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { TbLetterX } from 'react-icons/tb';
import styles from './styles.module.css';
import SubMail from '../SubMail';

function MailSender() {
  return (
    <div className={styles.mailSender}>
      <header className={styles.header}>
        <span>
          Promising offers
          <i>
            <TbLetterX />
          </i>
          <div clasName={styles.span2}></div>
        </span>
        <div clasName={styles.icons}>
          <CiStar />
          <IoMdPrint />
          <FiTrash2 />
          <HiOutlineDotsVertical />
        </div>
      </header>
      <div>
        <span>Today, 28th March 2024, 09:25</span>
        <h2>Meeting with new investors</h2>
      </div>
      <SubMail />
      {/* <SubMail /> */}
    </div>
  );
}

export default MailSender;
