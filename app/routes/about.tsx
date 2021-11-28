import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "Luke Bennett",
    description:
      "I’m a front-end web designer/developer. I specialise in making fast, accessible websites using modern technologies.",
  };
};

export default function AboutPage(): JSX.Element {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto prose dark:prose-dark">
        <h1>About</h1>
        <p>Hi, I’m Luke.</p>
        <p>
          I’m a front-end web designer/developer. I specialise in making blazing fast websites using modern
          technologies. I’m currently the lead developer at{" "}
          <a href="https://www.phirannodesigns.com.au">Phiranno Designs</a> — reach out if you’d like me to handle your
          next project.
        </p>
        <p>
          I’m your cliche hipster web-developer — I love coffee and craft beer. I also own a Helvetica poster and have a
          sticker of a Mac Classic on my car.
        </p>
        <p>
          I am a father to 7 kids (including 4 awesome step-kids.) I’ve always had a passion for design and I love
          technology and the open web.
        </p>
        <p>This website is built with the following stack:</p>
        <ul>
          <li>
            <a href="https://tailwindcss.com">Tailwind</a> <em>the</em> Utility First CSS framework.
          </li>
          <li>
            <a href="https://www.sanity.io">Sanity.io</a> a powerful headless CMS.
          </li>
          <li>
            <a href="https://remix.run">Remix</a> a new React meta framework.
          </li>
          <li>
            <a href="https://vercel.com">Vercel</a> hosting by the same people who make{" "}
            <a href="https://nextjs.org">Next.js</a>.
          </li>
        </ul>
      </div>
    </div>
  );
}
