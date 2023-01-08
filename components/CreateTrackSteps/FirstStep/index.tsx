import React, { FC } from 'react'
import { Card, Input, Textarea } from '@nextui-org/react'
import styles from './FirstStep.module.css'
import useInput from '../../../hooks/useInput'

interface IFirstStepProps {
  isDark?: boolean
  nameInputProps: ReturnType<typeof useInput>
  artistInputProps: ReturnType<typeof useInput>
  textInputProps: ReturnType<typeof useInput>
}

const FirstStep: FC<IFirstStepProps> = ({
  isDark,
  nameInputProps,
  artistInputProps,
  textInputProps,
}) => {
  return (
    <Card className={styles.card}>
      <Card.Body className={styles.cardBody}>
        <div className={styles.nameInputWrapper}>
          <Input
            {...nameInputProps}
            clearable
            bordered
            width='100%'
            color={isDark ? 'primary' : 'default'}
            status={isDark ? 'primary' : 'default'}
            helperText='Please enter track name'
            placeholder={'Track name'}
          />
        </div>
        <div className={styles.nameInputWrapper}>
          <Input
            {...artistInputProps}
            clearable
            bordered
            width='100%'
            color={isDark ? 'primary' : 'default'}
            status={isDark ? 'primary' : 'default'}
            helperText='Please enter artist name'
            placeholder={'Artist name'}
          />
        </div>
        <div className={styles.textInputWrapper}>
          <Textarea
            {...textInputProps}
            width={'100%'}
            labelPlaceholder='Track text'
            status={isDark ? 'primary' : 'default'}
            color={isDark ? 'primary' : 'default'}
          />
        </div>
      </Card.Body>
    </Card>
  )
}

export default FirstStep
