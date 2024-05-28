import React from 'react';
import styles from './styles.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>
        🔴 <b> 404 ERROR </b> 🔴
      </h1>
      <h2>Page Not found</h2>
      <button onClick={() => navigate('/')}> Return to home page </button>
    </div>
  );
}

export default NotFound;
