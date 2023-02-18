'use client';

import { FC, useCallback } from 'react';
import styles from './AudioInput.module.scss';
import AddIcon from '@mui/icons-material/Add';
import FileInput from '@utilsComponents/inputs/FileInput';
import withFormikFileInputHOC from '../../../../hocs/withFormikFileInputHOC';

type PropsType = {
  value: File | null;
  setValue: (value: File | null) => void;
};

const AudioInput: FC<PropsType> = (props) => {
  const setFile = useCallback(
    (file: File) => {
      props.setValue(file);
    },
    [props.setValue],
  );

  return (
    <FileInput accept={'audio/*'} setFile={setFile}>
      {(onClick) => {
        return (
          <div className={styles.root} onClick={onClick}>
            {props.value ? <p>Uploaded</p> : <AddIcon />}
          </div>
        );
      }}
    </FileInput>
  );
};

export const FormikAudioInput = withFormikFileInputHOC(AudioInput);

export default AudioInput;
