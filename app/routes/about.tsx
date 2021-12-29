import type { MetaFunction } from "remix";
import { getProseClasses } from "~/utils/get-prose-classes";
import { pageWrapperClasses } from "~/utils/page-wrapper-classes";

export const meta: MetaFunction = () => {
  return {
    title: "Luke Bennett",
    description:
      "I’m a front-end web designer/developer. I specialise in making fast, accessible websites using modern technologies.",
  };
};

export default function AboutPage(): JSX.Element {
  return (
    <div className={pageWrapperClasses}>
      <article className={getProseClasses({ isCentered: true })}>
        <h1>About</h1>
        <p>Hi, I’m Luke.</p>
        <p>
          I’m a front-end web designer/developer. I specialise in making blazing fast websites using modern
          technologies. I currently work at <a href="https://www.thinkmill.com.au">Thinkmill</a> one of Australia’s
          leading design &amp; development consultancies.
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
            <a href="https://www.sanity.io">Sanity.io</a> a powerful headless CMS (
            <a href="https://keystonejs.com">Keystone</a> is way better though{" "}
            <span aria-label="winking face emoji" role="img">
              😉
            </span>
            ).
          </li>
          <li>
            <a href="https://remix.run">Remix</a> a new React meta framework.
          </li>
          <li>
            <a href="https://vercel.com">Vercel</a> hosting by the same people who make{" "}
            <a href="https://nextjs.org">Next.js</a>.
          </li>
        </ul>
      </article>
    </div>
  );
}
