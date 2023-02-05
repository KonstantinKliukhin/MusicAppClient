'use client';

import React, { FC, useCallback, useMemo } from 'react';
import { useField } from 'formik';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import styles from './FormikImageInput.module.scss';
import Image from 'next/image';
import * as process from 'process';
import FileInput from '@utilsComponents/inputs/FileInput';

type PropsType = {
  name: string;
};

const FormikImageInput: FC<PropsType> = (props) => {
  const [field, _meta, helpers] = useField(props.name);

  const setFile = useCallback((file: File) => {
    helpers.setValue(file);
  }, []);

  const url: string | null = useMemo(() => {
    if (!process.browser) return null;
    if (!(field.value instanceof File)) return null;

    return URL.createObjectURL(field.value);
  }, [field.value]);

  return (
    <FileInput accept={'image/png, image/jpeg'} setFile={setFile}>
      {(onClick) => {
        return (
          <div className={styles.root} onClick={onClick}>
            {url ? (
              <Image src={url} height={76} width={76} alt={field.value?.name} />
            ) : (
              <AddPhotoAlternateIcon />
            )}
          </div>
        );
      }}
    </FileInput>
  );
};

export default FormikImageInput;
