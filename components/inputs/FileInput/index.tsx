import React, { ChangeEvent, FC, MouseEventHandler, useRef } from 'react'
import styles from './FileInput.module.css'

interface IFileInputProps {
  setFile: (file: File) => void
  accept?: string
  renderInput: (onClick: () => void) => JSX.Element
}

const FileInput: FC<IFileInputProps> = ({ setFile, accept, renderInput }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0]
    if (!file) return

    setFile(file)
  }

  return (
    <div className={styles.root} onClick={() => inputRef?.current?.click()}>
      <input ref={inputRef} onChange={onChange} accept={accept} type={'file'} hidden />
      {renderInput(() => inputRef?.current?.click())}
    </div>
  )
}

export default FileInput
