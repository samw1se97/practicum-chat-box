import React, { useState } from 'react';
import styles from './styles.module.css';

function MsgLi() {
  const [openSub, setOpenSub] = useState(false);
  return (
    <details className={styles.msgDetails}>
      <summary>
        <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=PastelGreen&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Tanned' />
        <h4>Israel Israeli</h4>
        <p>
          - Lorem ipsum dolor sit amet consectetur adipisicing elit. casccdac
        </p>
        <time>Sunday, 31/12/1989, 22:00</time>
      </summary>
      <p>
        Hello Sam, Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Assumenda explicabo aliquid deserunt fugit corrupti sapiente iste ullam.
        placeat voluptate consequatur non vel nemo nobis tempora, quaera
        officia! Voluptates, harum eos.
      </p>
    </details>
  );
}

export default MsgLi;
