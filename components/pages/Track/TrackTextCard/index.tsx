import React, { FC } from 'react';
import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';
import styles from './TrackTextCard.module.scss';

const TrackTextCard: FC = () => {
  return (
    <WhiteRoundedCard title={'Track text'}>
      <div className={styles.root}>
        <p className={styles.text}>
          qweqweqweqweqweqweqw qweqweqweqweqweqweqw qweqweqweqweqweqweqw qweqweqweqweqweqweqw
          qweqweqweqweqweqweqw qweqweqweqweqweqweqw qweqweqw eqweqw eqweqwq weqweqweqweqweqweqw
          qweqweqweqwe qweqweqwq weqweqweqweqweqw eqw v qweqweqweqweqweqweqwqweqweqweqweq
          weqweqwqweqwe qweqweqwe qweqwqweqweqweqweq weqweqwv vqw eqweqweqweqweqweqw qweqweqweq weqw
          eqweqw vqweqweqweqweqweqweq wqweqweqw eqweqweqwe qwqweqw eqweqweqwe qweqwqweqweqweqweqwe
          qweqwqw eqweqweqweqwe qweqwqweqweqweqweqw eqweqwqweqweqweqw eqweq weqw
        </p>
      </div>
    </WhiteRoundedCard>
  );
};

export default TrackTextCard;
