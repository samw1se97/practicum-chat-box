import React from 'react';
import styles from './styles.module.css';
import { editorIcons, upldOrDelIcons } from '../../assets/icons/icons';
import SendBtn from '../SendBtn';

function TextArea() {
  return (
    <form className={styles.editor}>
      <div className={styles.editorContent}>
        <textarea
          required
          type='textarea'
          placeholder='Write your message...'
          cols={30}
          row={20}
        />

        <div className={styles.formatBtns}>
          {editorIcons &&
            editorIcons.map((el) => (
              <button key={el.name}>
                <el.icon />
              </button>
            ))}
        </div>
      </div>
      <div className={styles.bottomActions}>
        <div className={styles.left}>
          {upldOrDelIcons &&
            upldOrDelIcons.map((el) => <el.icon key={el.name} />)}
        </div>
        <div className={styles.right}>
          <SendBtn />
        </div>
      </div>
    </form>
  );
}

export default TextArea;
