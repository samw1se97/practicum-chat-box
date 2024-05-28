import React from 'react';
import styles from './styles.module.css';

function InputSearch() {
  return (
    <div className={styles.searchInput}>
      <input type='text' placeholder='search...' />
    </div>
  );
}

export default InputSearch;
