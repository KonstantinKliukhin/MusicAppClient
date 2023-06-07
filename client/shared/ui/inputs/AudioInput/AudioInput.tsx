'use client';

import AddIcon from '@mui/icons-material/Add';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import cs from 'classnames';
import React, { FC, useCallback } from 'react';
import { ACCEPTED_AUDIO_TYPES, ACCEPTED_AUDIO_TYPES_STRING } from '@shared/config';
import { FileInput } from '../FileInput/FileInput';
import { withFormikFileInputHOC } from '../formikHOCs/withFormikFileInputHOC';
import { useFileInputDrag } from '../hooks/useFileInputDrag';
import styles from './AudioInput.module.scss';

type PropsType = {
  value: File | null;
  setValue: (value: File | null) => void;
};

export const AudioInput: FC<PropsType> = (props) => {
  const setFile = useCallback(
    (file: File) => {
      if (!ACCEPTED_AUDIO_TYPES.includes(file.type)) return;
      props.setValue(file);
    },
    [props.setValue],
  );
  const { drag, ...dragHandlers } = useFileInputDrag(setFile);

  return (
    <FileInput accept={ACCEPTED_AUDIO_TYPES_STRING} setFile={setFile}>
      {(onClick) => {
        return (
          <div
            className={cs(styles.root, { [styles.dragOver]: drag })}
            onClick={onClick}
            {...dragHandlers}
          >
            {props.value ? (
              <div className={styles.contentWrapper}>
                <CloudDoneIcon className={styles.uploadedIcon} />
                <p className={styles.uploadedText}>Uploaded track: {`"${props.value.name}"`}</p>
              </div>
            ) : (
              <div className={styles.contentWrapper}>
                <AddIcon className={styles.addIcon} />
                <p className={styles.emptyText}>Drop your audio or click</p>
              </div>
            )}
          </div>
        );
      }}
    </FileInput>
  );
};

export const FormikAudioInput = withFormikFileInputHOC(AudioInput);
