import React, { FC, useEffect, useState } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import StepWrapper from '../StepWrapper'
import { Button, Container, useTheme } from '@nextui-org/react'
import useInput from '../../hooks/useInput'
import reduxHooks from '../../hooks/reduxHooks'
import useAppSelector from '../../hooks/useAppSelector'
import { RequestLoadingStateType } from '../../store/types/requestLoadingStateType'
import { useRouter } from 'next/navigation'
import { ICreateTrackDto } from '../../types/entities/track/dto/createTrack'

interface ICreateTrackStepsProps {}

const CreateTrackSteps: FC<ICreateTrackStepsProps> = () => {
  const [activeStep, setActiveStep] = useState<number>(0)
  const [picture, setPicture] = useState<File | null>(null)
  const [audio, setAudio] = useState<File | null>(null)
  const nameInputProps = useInput('')
  const artistInputProps = useInput('')
  const textInputProps = useInput('')
  const { isDark } = useTheme()
  const createTrackLoadingState = useAppSelector((state) => state.tracks.createTrackLoading)
  const { createTrack, refreshCreateTrackLoadingState, fetchTracks } = reduxHooks()
  const router = useRouter()
  useEffect(() => {
    if (createTrackLoadingState === RequestLoadingStateType.SUCCESS) {
      fetchTracks()
      router.push('/tracks')
      refreshCreateTrackLoadingState()
    }
  }, [createTrackLoadingState])

  const onSubmit = () => {
    if (!picture || !audio || !nameInputProps || !artistInputProps || !textInputProps) return

    const createTrackData: ICreateTrackDto = {
      name: nameInputProps.value,
      artist: artistInputProps.value,
      text: textInputProps.value,
      picture,
      audio,
    }
    createTrack(createTrackData)
  }

  const back = () => {
    setActiveStep((prev) => prev - 1)
  }

  const next = () => {
    if (activeStep === 2) {
      onSubmit()
      return
    }
    setActiveStep((prev) => prev + 1)
  }

  const renderSteps = (): JSX.Element | null => {
    switch (activeStep) {
      case 0:
        return (
          <FirstStep
            nameInputProps={nameInputProps}
            artistInputProps={artistInputProps}
            textInputProps={textInputProps}
            isDark={isDark}
          />
        )
      case 1:
        return <SecondStep accept={'image'} setFile={setPicture} />
      case 2:
        return <ThirdStep accept={'audio'} setFile={setAudio} />
      default:
        return null
    }
  }
  return (
    <>
      <StepWrapper activeStep={activeStep}>{renderSteps()}</StepWrapper>
      <Container display={'flex'} direction={'row'} justify={'space-between'}>
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button onClick={next}>{activeStep === 2 ? 'Add track' : 'Next'}</Button>
      </Container>
    </>
  )
}

export default CreateTrackSteps
