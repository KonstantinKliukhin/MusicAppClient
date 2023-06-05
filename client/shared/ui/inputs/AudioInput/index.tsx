'use client';

import React, { FC, useCallback } from 'react';
import styles from './AudioInput.module.scss';
import AddIcon from '@mui/icons-material/Add';
import { ACCEPTED_AUDIO_TYPES, ACCEPTED_AUDIO_TYPES_STRING, withFormikFileInputHOC } from '../../../lib';
import FileInput from '../FileInput';
import { useFileInputDrag } from '../../../lib';
import cs from 'classnames';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

type PropsType = {
  value: File | null;
  setValue: (value: File | null) => void;
};

const AudioInput: FC<PropsType> = (props) => {
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

export default AudioInput;
