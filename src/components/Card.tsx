import React from 'react';
import styles from './card.module.css'
import Image from 'next/image'


const Card = ({img, header, text} : {img:string, header:string, text:string}) => {
  return (
    <div className={styles.brutalistCard}>
        <div className={styles.brutalistCardHeader}>
            <Image 
              src={img} 
              fill={true}
              priority
              objectFit='cover'
              alt='card'
            />
        </div>
        <div className={styles.brutalistCardMessage}>
            <h2>{header}</h2>
        </div>
        <div className={styles.brutalistCardMessage}>
            {text}
        </div>
        <div className={styles.brutalistCardActions}>
            <a className={styles.brutalistCardButton + " " + styles.brutalistCardButtonMark} href="#">Continue</a>
        </div>
    </div>
  );
}

export default Card;
