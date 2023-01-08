import { ChangeEvent, useState } from 'react'
import { FormElement } from '@nextui-org/react'

const useInput = (
  initialValue: string,
): { value: string; onChange: (e: ChangeEvent<FormElement>) => void } => {
  const [value, setValue] = useState<string>(initialValue)

  const onChange = (e: ChangeEvent<FormElement>) => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange,
  }
}
export default useInput
