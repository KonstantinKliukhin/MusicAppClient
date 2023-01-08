import React, { FC } from 'react'
import { Container, Grid, Text, useTheme } from '@nextui-org/react'
import { Step, StepLabel, Stepper } from '@mui/material'
import styles from './StepWrapper.module.css'
import cs from 'classnames'

interface IStepWrapperProps {
  activeStep: number
  children: JSX.Element | null
}

const steps = ['Track info', 'Upload thumbnail', 'Upload track']

const StepWrapper: FC<IStepWrapperProps> = ({ activeStep, children }) => {
  const { isDark } = useTheme()
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step
            key={index}
            completed={activeStep > index}
            className={cs(styles.step, { [styles.darkStep]: isDark && !(activeStep === index) })}
          >
            <StepLabel>
              <Text>{step}</Text>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid justify={'center'}>{children}</Grid>
    </Container>
  )
}

export default StepWrapper
