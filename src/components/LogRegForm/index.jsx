import React from 'react';
import styles from './styles.module.css';


function LogRegForm({ children, props }) {
  console.log(children);

  return <form className={styles.form}>{children}</form>;
}

export default LogRegForm;
