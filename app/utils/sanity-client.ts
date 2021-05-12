import type { SanityClient } from '@sanity/client';
import sanityClient from '@sanity/client';

const client: SanityClient = sanityClient({
  projectId: process.env.SANITY_PROJECTID || '',
  dataset: 'production',
  apiVersion: '2021-03-25', // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
});

export { client as sanityClient };
