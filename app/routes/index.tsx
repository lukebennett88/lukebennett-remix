import type { MetaFunction } from 'remix';

import { Hero } from '../components/hero';

export const meta: MetaFunction = () => {
  return {
    title: 'Luke Bennett',
    description:
      'I’m a front-end web designer/developer. I specialise in making fast, accessible websites using modern technologies.',
  };
};

export default function Index(): React.ReactElement {
  return (
    <>
      <Hero />
    </>
  );
}
