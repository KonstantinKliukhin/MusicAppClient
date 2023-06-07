import { z } from 'zod'

const envVariables = z.object({
  NEXT_PUBLIC_API_PATH: z.string().url(),
  NEXT_PUBLIC_APP_API_PATH: z.string().url(),
  // NEXTAUTH_SECRET: z.string().min(10),
});

const env = {
  NEXT_PUBLIC_API_PATH: process.env.NEXT_PUBLIC_API_PATH,
  NEXT_PUBLIC_APP_API_PATH: process.env.NEXT_PUBLIC_APP_API_PATH,
}

envVariables.parse(env);

export const envConfig = {
  NEXT_PUBLIC_API_PATH: process.env.NEXT_PUBLIC_API_PATH,
  NEXT_PUBLIC_APP_API_PATH: process.env.NEXT_PUBLIC_APP_API_PATH,
  // NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
} as z.infer<typeof envVariables>;
