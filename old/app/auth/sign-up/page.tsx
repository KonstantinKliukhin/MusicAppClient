import React, { FC } from 'react';
import WhiteRoundedCard from '../../../../src/shared/ui/cards/WhiteRoundedCard';
import { FormikTextInput } from '../../../../src/shared/ui/inputs/TextInput';
import VerticalFormLayout from '../../../../src/shared/ui/forms/VerticalFormLayout';
import PinkButton from '../../../../src/shared/ui/buttons/PinkButton';
import SignUpFormik from '../../../components/pages/auth/signUp/SignUpFormik';

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
