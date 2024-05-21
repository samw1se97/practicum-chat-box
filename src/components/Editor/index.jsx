import { useState } from 'react';

// Importing core components
import QuillEditor from 'react-quill';

// Importing styles
import styles from './styles.module.css';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  // Editor state
  const [value, setValue] = useState('');

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Editor Content</label>
      <QuillEditor
        className={styles.editor}
        theme='snow'
        value={value}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
};

export default Editor;
