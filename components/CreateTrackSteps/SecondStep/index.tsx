import React, { FC } from 'react'
import FileInput from '../../inputs/FileInput'
import { Button } from '@nextui-org/react'

interface ISecondStepProps {
  setFile: (file: File) => void
  accept: string
}

const SecondStep: FC<ISecondStepProps> = ({ setFile }) => {
  return (
    <div>
      <FileInput
        setFile={setFile}
        accept={'image'}
        renderInput={(onClick: () => void) => (
          <Button onClick={onClick} color={'gradient'}>
            Upload thumbnail
          </Button>
        )}
      />
    </div>
  )
}

export default SecondStep
