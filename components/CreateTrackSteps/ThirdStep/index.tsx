import React, { FC } from 'react'
import FileInput from '../../inputs/FileInput'
import { Button } from '@nextui-org/react'

interface IThirdStepProps {
  setFile: (file: File) => void
  accept: string
}

const ThirdStep: FC<IThirdStepProps> = ({ setFile }) => {
  return (
    <div>
      <FileInput
        setFile={setFile}
        accept={'audio'}
        renderInput={(onClick: () => void) => (
          <Button onClick={onClick} color={'gradient'}>
            Upload audio
          </Button>
        )}
      />
    </div>
  )
}

export default ThirdStep
