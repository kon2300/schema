import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

export const authContract = c.router({
  create: {
    method: 'POST',
    path: '/auth/login',
    responses: {
      200: z.object({
        data: z.object({
          accessToken: z.string(),
        }),
      }),
    },
    body: z.object({
      email: z.string().max(40),
      password: z.string().max(20),
    }),
    summary: 'login',
  },
});
