import type { LoaderFunction, MetaFunction } from "remix";
import { json, Link, useLoaderData } from "remix";

import { Hero } from "~/components/hero";
import type { SanityPost } from "~/types/sanity";
import { sanityClient } from "~/utils/sanity-client";

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = async () => {
  try {
    const response: Array<SanityPost> = await sanityClient.fetch(`*[_type == "post"]`);
    // https://remix.run/api/remix#json
    return json(response);
  } catch (error) {
    throw new Error("There was a problem loading posts");
  }
};

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: "Luke Bennett",
    description: "Personal website for Luke Bennett",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const posts = useLoaderData<Array<SanityPost>>();

  return (
    <>
      <Hero />
      {posts ? <Posts posts={posts} /> : null}
    </>
  );
}

function Posts({ posts }: { posts: Array<SanityPost> }) {
  return (
    <div className="max-w-5xl mx-auto mt-16 sm:mt-24 lg:mt-32">
      <ul className="grid gap-8">
        {posts.map((post) => (
          <li key={post._id}>
            <Link
              to={`/posts/${post.slug.current}/`}
              className="block px-4 py-6 transition duration-300 ease-in-out rounded-lg sm:px-6 lg:px-8 sm:py-8 lg:py-10 dark:hover:bg-gray-700 hover:shadow-lg transform-gpu hover:-translate-y-1 hover:scale-105"
            >
              <article className="prose dark:prose-dark">
                <h2 className="!text-4xl !mb-[0.8888889em] leading-[1.1111111em]">{post.title}</h2>
                {post.description}
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
