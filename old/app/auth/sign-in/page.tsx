import React, { FC } from 'react';
import WhiteRoundedCard from '../../../../src/shared/ui/cards/WhiteRoundedCard';
import { FormikTextInput } from '../../../../src/shared/ui/inputs/TextInput';
import SignInFormik from '../../../components/pages/auth/signIn/SignInFormik';
import VerticalFormLayout from '../../../../src/shared/ui/forms/VerticalFormLayout';
import PinkButton from '../../../../src/shared/ui/buttons/PinkButton';

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
