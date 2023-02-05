import React from 'react';
import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';
import styles from './TrackCard.module.scss';

const TrackCard = () => {
  return (
    <WhiteRoundedCard>
      <div className={styles.root}>
        {/*<Image*/}
        {/*  width={200}*/}
        {/*  height={200}*/}
        {/*  src={'https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg'}*/}
        {/*  alt={'track'}*/}
        {/*/>*/}
        <div className={styles.textsWrapper}>
          <h2 className={styles.artistName}>Artist</h2>
          <h1 className={styles.trackName}>Track</h1>
          <h3 className={styles.listens}>Listens: 2</h3>
        </div>
      </div>
    </WhiteRoundedCard>
  );
};

export default TrackCard;
