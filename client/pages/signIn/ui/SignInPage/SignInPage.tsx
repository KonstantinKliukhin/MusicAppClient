import React from 'react';
import { FormikTextInput, PinkButton, VerticalFormLayout, WhiteRoundedCard } from '../../../../shared/ui';
import { SignInForm } from '../../../../features/auth';

export function SignInPage() {
  return (
    <SignInForm>
      <WhiteRoundedCard title='Sign In'>
        <VerticalFormLayout>
          <FormikTextInput name='email' label='Email' />
          <FormikTextInput name='password' label='Password' />
          <PinkButton type='submit'>Sign In</PinkButton>
        </VerticalFormLayout>
      </WhiteRoundedCard>
    </SignInForm>
  );
};
