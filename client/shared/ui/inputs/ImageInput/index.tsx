'use client';

import React, { FC, useCallback, useMemo } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import styles from './ImageInput.module.scss';
import Image from 'next/image';
import * as process from 'process';
import { withFormikFileInputHOC } from '../../../lib';
import FileInput from '../FileInput';
import cs from 'classnames';
import useFileInputDrag from '../../../../../old/hooks/useFileInputDrag';
import constants from '@constants';

type PropsType = {
  value: File | null;
  setValue: (value: File | null) => void;
};

const ImageInput: FC<PropsType> = (props) => {
  const setFile = useCallback(
    (file: File) => {
      if (!constants.ACCEPTED_IMAGE_TYPES.includes(file.type)) return;
      props.setValue(file);
    },
    [props.setValue],
  );
  const { drag, ...dragHandlers } = useFileInputDrag(setFile);

  const url: string | null = useMemo(() => {
    if (!process.browser) return null;
    if (!(props.value instanceof File)) return null;

    return URL.createObjectURL(props.value);
  }, [props.value]);

  return (
    <FileInput accept={constants.ACCEPTED_IMAGE_TYPES_STRING} setFile={setFile}>
      {(onClick) => {
        return (
          <div
            className={cs(styles.root, { [styles.dragOver]: drag })}
            onClick={onClick}
            {...dragHandlers}
          >
            {url ? (
              <Image className={styles.image} src={url} alt={props.value?.name ?? 'file preview'} />
            ) : (
              <div className={styles.emptyContentWrapper}>
                <AddPhotoAlternateIcon className={styles.addIcon} />
                <p className={styles.emptyText}>Drop your image or click</p>
              </div>
            )}
          </div>
        );
      }}
    </FileInput>
  );
};

export const FormikImageInput = withFormikFileInputHOC(ImageInput);

export default ImageInput;
