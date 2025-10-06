import {z} from 'zod';

export const configValidationSchema = z.object({
  PORT: z.coerce.number().default(3001),
  NODE_ENV: z.enum(['development', 'production', 'test']),
  FRONTEND_URL: z.string().url(),
});

export type ConfigSchema = z.infer<typeof configValidationSchema>;
