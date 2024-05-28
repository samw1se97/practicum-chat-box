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
import { NavLink, Outlet } from 'react-router-dom';

function MainNav() {
  const links = [
    { id: 1, icon: <IoTimerOutline />, href: '/timer' },
    { id: 2, icon: <IoClipboardOutline />, href: '/tasks' },
    { id: 3, icon: <IoEyeOutline />, href: '/watch' },
    { id: 4, icon: <IoPeopleCircleOutline />, href: 'emails' },
    { id: 5, icon: <IoStatsChart />, href: '/stats' },
    { id: 6, icon: <IoVideocam />, href: '/video' },
  ];

  return (
    <>
      <nav className={styles.navbar}>
        <IoLogoReact />
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : ''
                }
                to={link.href}>
                <div>{link.icon}</div>
              </NavLink>
            </li>
          ))}
        </ul>

        <FcBusinessman />
      </nav>
      <Outlet />
    </>
  );
}

export default MainNav;
