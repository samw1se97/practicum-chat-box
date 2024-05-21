import React from 'react';
import styles from './styles.module.css';
import {
  IoClipboardOutline,
  IoEyeOutline,
  IoLogoReact,
  IoPeopleCircleOutline,
  IoStatsChart,
  IoTimerOutline,
  IoVideocam,
} from 'react-icons/io5';
import { FcBusinessman } from 'react-icons/fc';
import { Outlet } from 'react-router-dom';

function MainNav() {
  const links = [
    { id: 1, icon: <IoTimerOutline />, href: 'http://' },
    { id: 2, icon: <IoClipboardOutline />, href: 'http://' },
    { id: 3, icon: <IoEyeOutline />, href: 'http://' },
    { id: 4, icon: <IoPeopleCircleOutline />, href: '/emailsNav' },
    { id: 5, icon: <IoStatsChart />, href: 'http://' },
    { id: 6, icon: <IoVideocam />, href: 'http://' },
  ];

  return (
    <>
      <nav className={styles.navbar}>
        <span>
          <IoLogoReact />
        </span>
        <ul>
          {links.map((link) => (
            <a href={link.href} key={link.id}>
              <li> {link.icon} </li>
            </a>
          ))}
        </ul>

        <FcBusinessman />
      </nav>
      <Outlet />
    </>
  );
}

export default MainNav;
