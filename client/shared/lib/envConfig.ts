import { z } from 'zod'

/**
 * ✅ DX Best practice (Type safe)
 *
 * Validate env variables with zod
 */
const envVariables = z.object({
  NEXT_PUBLIC_API_PATH: z.string().url(),
  NEXT_PUBLIC_APP_API_PATH: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(10),
});

envVariables.parse(process.env);

declare global {
  interface ImportMetaEnv extends z.infer<typeof envVariables> {}
}

export const envConfig = {
  NEXT_PUBLIC_API_PATH: process.env.NEXT_PUBLIC_API_PATH,
  NEXT_PUBLIC_APP_API_PATH: process.env.NEXT_PUBLIC_APP_API_PATH,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
} as const;
