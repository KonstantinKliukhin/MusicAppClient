'use client';

import React, { ChangeEvent, FC, ReactNode, useCallback, useRef } from 'react';
import styles from './FileInput.module.scss';

interface IFileInputProps {
  setFile: (file: File) => void;
  accept?: string;
  children: (onClick: () => void) => JSX.Element | ReactNode;
}

const FileInput: FC<IFileInputProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (!file) return;

    props.setFile(file);
  };

  const onClick = useCallback(() => {
    if (!inputRef.current) return;

    inputRef.current.click();
  }, [inputRef]);

  return (
    <div className={styles.root}>
      <input ref={inputRef} onChange={onChange} accept={props.accept} type={'file'} hidden />
      {props.children(onClick)}
    </div>
  );
};

export default FileInput;
