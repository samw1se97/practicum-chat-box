import React, { useState } from 'react';
import styles from './styles.module.css';
import TextErea from '../TextErea';

function SubMail() {
  const [openSub, setOpenSub] = useState(false);
  return (
    <div>
      <div onClick={() => setOpenSub(!openSub)} className={styles.subMail}>
        <div className={styles.avatar}>
          <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=PastelGreen&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Tanned' />
        </div>
        <div className={styles.content}>
          <span className={styles.fullName}>Israel Israeli</span>
          {!openSub && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. casccdac
              csacsa vdaee csaca{' '}
            </p>
          )}
        </div>
        <div className={styles.date}>
          <span>28.03.2024</span>
          <span>09:25</span>
        </div>
      </div>
      {openSub && (
        <div className={styles.opened}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. casccdac
            csacsa vdaee csaca
          </p>
        </div>
      )}

      <TextErea />
    </div>
  );
}

export default SubMail;
