import React, { useEffect } from 'react';
import styles from './styles.module.css';

function index({ linkItem }) {
  const { icon, name, href } = linkItem;

  console.log(linkItem);
  return (
    <a href={href} className={styles.singleLink}>
      <span>{icon}</span>
      <p>{name}</p>
      {linkItem.number && (
        <span className={`${styles.badge} ${styles.isActive}`}>
          {linkItem.number}
        </span>
      )}
    </a>
  );
}

export default index;
