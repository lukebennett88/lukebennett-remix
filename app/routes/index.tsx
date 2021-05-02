import * as React from 'react';
import type { LoaderFunction, MetaFunction } from 'remix';

import { Hero } from '../components/hero';

export const meta: MetaFunction = () => {
  return {
    title: 'Luke Bennett',
    description:
      'I’m a front-end web designer/developer. I specialise in making fast, accessible websites using modern technologies.',
  };
};

export const loader: LoaderFunction = async () => {
  return { message: 'this is awesome 😎' };
};

export default function Index(): React.ReactElement {
  return (
    <>
      <Hero />
    </>
  );
}
