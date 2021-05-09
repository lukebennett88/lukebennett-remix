import type { MetaFunction } from 'remix';

import { Hero } from '../components/hero';

export const meta: MetaFunction = () => {
  return {
    title: 'Luke Bennett',
    description:
      'I’m a front-end web designer/developer. I specialise in making fast, accessible websites using modern technologies.',
    image: '/share-image.png',
  };
};

export default function IndexPage(): JSX.Element {
  return (
    <>
      <Hero />
    </>
  );
}
