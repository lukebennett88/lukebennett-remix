import type { SanityClient } from '@sanity/client';
import sanityClient from '@sanity/client';

const client: SanityClient = sanityClient({
  projectId: 'o7yctpdt',
  dataset: 'production',
  apiVersion: '2021-03-25', // use a UTC date string
  // token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

export { client as sanityClient };
