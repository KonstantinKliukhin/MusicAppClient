'use client'

import { PropsWithChildren } from 'react'
import ReduxProvider from '../providers/reduxProvider'

type PropsType = PropsWithChildren;

export default function Providers({ children }: PropsType) {

  return (
    <>
      <ReduxProvider>
          {children}
      </ReduxProvider>
    </>
  )
}