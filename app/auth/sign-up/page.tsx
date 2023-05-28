import React, { FC } from 'react';
import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';
import { FormikTextInput } from '@uiComponents/inputs/TextInput';
import VerticalFormLayout from '@uiComponents/forms/VerticalFormLayout';
import PinkButton from '@uiComponents/buttons/PinkButton';
import SignUpFormik from '@pageComponents/auth/signUp/SignUpFormik';

const SignUp: FC = () => {
  return (
    <SignUpFormik>
      <WhiteRoundedCard title='Sign Up'>
        <VerticalFormLayout>
          <FormikTextInput name='name' label='Name' />
          <FormikTextInput name='email' label='Email' />
          <FormikTextInput name='password' label='Password' />
          <PinkButton type='submit'>Sign Up</PinkButton>
        </VerticalFormLayout>
      </WhiteRoundedCard>
    </SignUpFormik>
  );
};

export default SignUp;
