import React from 'react';
import LoadingGif from '@images/loaders/loader.gif';
import Image from 'next/image';

const Loading = () => {
  return (
    <div>
      <Image src={LoadingGif} alt={'loading'} />
    </div>
  );
};

export default Loading;
