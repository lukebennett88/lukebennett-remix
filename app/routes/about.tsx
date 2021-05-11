import type { MetaFunction } from 'remix';

export const meta: MetaFunction = () => {
  return {
    title: 'Luke Bennett',
    description:
      'I’m a front-end web designer/developer. I specialise in making fast, accessible websites using modern technologies.',
  };
};

export default function AboutPage(): JSX.Element {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto prose dark:prose-dark">
        <h1>About</h1>
        <p>Hi, I’m Luke.</p>
        <p>
          I’m a front-end web designer/developer. I specialise in making blazing
          fast websites using modern technologies. I’m currently the lead
          developer at{' '}
          <a href="https://www.phirannodesigns.com.au">Phiranno Designs</a> —
          reach out if you’d like me to handle your next project.
        </p>
        <p>
          I’m your cliche hipster web-developer — I love coffee and craft beer.
          I also own a Helvetica poster and have a sticker of a Mac Classic on
          my car.
        </p>
        <p>
          I am a father to 7 kids (including 4 awesome step-kids.) I’ve always
          had a passion for design and I love technology and the open web.
        </p>
        <p>This website proudly uses the following stack:</p>
        <p>
          <a href="https://tailwindcss.com">Tailwind</a> (a utility first CSS
          framework) for almost all of my CSS.{' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a> (a blazing fast
          React-based static site generator) for the frontend.{' '}
          <a href="https://www.netlify.com">Netlify</a> (a feature-rich and easy
          to use hosting platform) for hosting the frontend. Decoupled{' '}
          <a href="https://wordpress.org">WordPress</a> for the CMS/backend.{' '}
          <a href="https://www.digitalocean.com">DigitalOcean</a>, (another
          great hosting platform) for hosting the WordPress install.
        </p>
      </div>
    </div>
  );
}
