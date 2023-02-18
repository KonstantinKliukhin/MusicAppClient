'use client';

import React, { FC, useCallback, useMemo } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import styles from './ImageInput.module.scss';
import Image from 'next/image';
import * as process from 'process';
import FileInput from '@utilsComponents/inputs/FileInput';
import withFormikFileInputHOC from '../../../../hocs/withFormikFileInputHOC';

type PropsType = {
  value: File | null;
  setValue: (value: File | null) => void;
};

const ImageInput: FC<PropsType> = (props) => {
  const setFile = useCallback(
    (file: File) => {
      props.setValue(file);
    },
    [props.setValue],
  );

  const url: string | null = useMemo(() => {
    if (!process.browser) return null;
    if (!(props.value instanceof File)) return null;

    return URL.createObjectURL(props.value);
  }, [props.value]);

  return (
    <FileInput accept={'image/png, image/jpeg'} setFile={setFile}>
      {(onClick) => {
        return (
          <div className={styles.root} onClick={onClick}>
            {url ? (
              <Image src={url} height={76} width={76} alt={props.value?.name ?? 'file preview'} />
            ) : (
              <AddPhotoAlternateIcon />
            )}
          </div>
        );
      }}
    </FileInput>
  );
};

export const FormikImageInput = withFormikFileInputHOC(ImageInput);

export default ImageInput;
