import React, { FC } from 'react';
import WhiteRoundedCard from '@uiComponents/cards/WhiteRoundedCard';
import { FormikTextInput } from '@uiComponents/inputs/TextInput';
import SignInFormik from '@pageComponents/auth/signIn/SignInFormik';
import VerticalFormLayout from '@uiComponents/forms/VerticalFormLayout';
import PinkButton from '@uiComponents/buttons/PinkButton';

const SignIn: FC = () => {
  return (
    <SignInFormik>
      <WhiteRoundedCard title='Sign In'>
        <VerticalFormLayout>
          <FormikTextInput name='email' label='Email' />
          <FormikTextInput name='password' label='Password' />
          <PinkButton type='submit'>Sign In</PinkButton>
        </VerticalFormLayout>
      </WhiteRoundedCard>
    </SignInFormik>
  );
};

export default SignIn;
