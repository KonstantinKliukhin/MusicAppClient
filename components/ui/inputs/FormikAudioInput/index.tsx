'use client';

import { FC, useCallback } from 'react';
import FileInput from '@uiComponents/inputs/FileInput';
import styles from './FormikAudioInput.module.scss';
import { useField } from 'formik';
import AddIcon from '@mui/icons-material/Add';

type PropsType = {
  name: string;
};

const FormikAudioInput: FC<PropsType> = (props) => {
  const [field, _meta, helpers] = useField(props.name);

  const setFile = useCallback((file: File) => {
    helpers.setValue(file);
  }, []);

  return (
    <FileInput accept={'audio/*'} setFile={setFile}>
      {(onClick) => {
        return (
          <div className={styles.root} onClick={onClick}>
            {field.value ? <p>Uploaded</p> : <AddIcon />}
          </div>
        );
      }}
    </FileInput>
  );
};

export default FormikAudioInput;
