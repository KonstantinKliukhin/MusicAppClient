import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
} from '@reduxjs/toolkit/query/react'

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
)

export default createApi;