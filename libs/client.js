import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'tiamat',
  apiKey: process.env.API_KEY,
});
