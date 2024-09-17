import React from 'react';
import styles from './styles.module.css';

// אפשר למחוק רת הקומפוננטה

function InputSearch() {
  return (
    <input type='text' placeholder='search...' />
    // <div className={styles.searchInput}>
    //   <input type='text' placeholder='search...' />
    // </div>
  );
}

export default InputSearch;
