import { json, Link, LoaderFunction, MetaFunction, useLoaderData } from "remix";

import { SanityPost } from "~/types/sanity";
import { classNames } from "~/utils/classnames";
import { getProseClasses } from "~/utils/get-prose-classes";
import { pageWrapperClasses } from "~/utils/page-wrapper-classes";
import { sanityClient } from "~/utils/sanity-client";

export const meta: MetaFunction = () => {
  return {
    title: "Luke Bennett",
    description:
      "I’m a front-end web designer/developer. I specialise in making fast, accessible websites using modern technologies.",
    image: "/share-image.png",
  };
};

export const loader: LoaderFunction = async () => {
  try {
    const response: SanityPost[] | undefined = await sanityClient.fetch(`*[_type == "post"]`);
    return json(response);
  } catch (error) {
    return json(error, { status: 404 });
  }
};

export default function PostsPage(): JSX.Element {
  const posts = useLoaderData<SanityPost[]>();
  return (
    <div className={pageWrapperClasses}>
      <div className="w-full mx-auto max-w-prose">
        <div className={getProseClasses({ isCentered: true })}>
          <h1>Featured Posts</h1>
        </div>
        <article className="mt-12">
          <ul className="grid gap-8">
            {posts.map((post) => (
              <li key={post._id}>
                <Link
                  to={`/posts/${post.slug.current}/`}
                  className="block px-4 py-6 -mx-4 transition duration-300 ease-in-out lg:-mx-8 sm:rounded-lg lg:px-8 sm:py-8 lg:py-10 dark:hover:bg-gray-700 hover:shadow-lg transform-gpu hover:-translate-y-1"
                >
                  <article className={getProseClasses({ isCentered: true })}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
