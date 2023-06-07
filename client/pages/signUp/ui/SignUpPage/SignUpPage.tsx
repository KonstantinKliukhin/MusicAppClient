import React from 'react';
import { SignUpForm } from '../../../../features/auth';
import { FormikTextInput, PinkButton, VerticalFormLayout, WhiteRoundedCard } from '../../../../shared/ui';

export function SignUpPage() {
  return (
    <SignUpForm>
      <WhiteRoundedCard title='Sign Up'>
        <VerticalFormLayout>
          <FormikTextInput name='name' label='Name' />
          <FormikTextInput name='email' label='Email' />
          <FormikTextInput name='password' label='Password' />
          <PinkButton type='submit'>Sign Up</PinkButton>
        </VerticalFormLayout>
      </WhiteRoundedCard>
    </SignUpForm>
  );
};
