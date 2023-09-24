import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

export const userContract = c.router({
  create: {
    method: 'POST',
    path: '/user/create',
    responses: {
      201: z.object({
        data: z.object({
          id: z.string(),
          email: z.string(),
          createdAt: z.date(),
          updatedAt: z.date(),
          file: z.string().optional(),
        }),
      }),
    },
    body: z.object({
      email: z.string().max(40),
      password: z.string().max(20),
    }),
    summary: 'Create an user',
  },

  getProfile: {
    method: 'GET',
    path: '/user/profile',
    responses: {
      200: z
        .object({
          data: z.object({
            id: z.string(),
            email: z.string(),
            createdAt: z.date(),
            updatedAt: z.date(),
            file: z.string().optional(),
          }),
        })
        .nullable(),
    },
    summary: 'Get a profile by requester id',
  },
});
