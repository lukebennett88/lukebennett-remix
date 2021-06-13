import { Link, LoaderFunction, MetaFunction, useRouteData } from 'remix';

import { SanityPost } from '../../types/sanity';
import { Hero } from '../components/hero';
import { sanityClient } from '../utils/sanity-client';

export const meta: MetaFunction = () => {
  return {
    title: 'Luke Bennett',
    description:
      'I’m a front-end web designer/developer. I specialise in making fast, accessible websites using modern technologies.',
    image: '/share-image.png',
  };
};

export const loader: LoaderFunction = async () => {
  let response: SanityPost[] | undefined;
  try {
    response = await sanityClient.fetch(`*[_type == "post"]`);
  } catch (error) {
    throw new Error(error);
  }
  return response;
};

export default function IndexPage(): JSX.Element {
  const posts = useRouteData<SanityPost[]>();
  return (
    <>
      <Hero />
      <Posts posts={posts} />
    </>
  );
}

interface PostsProps {
  posts: SanityPost[] | undefined;
}

function Posts({ posts }: PostsProps): JSX.Element | null {
  if (!posts) {
    return null;
  }
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
                <h2 className="!text-4xl !mb-[0.8888889em] leading-[1.1111111em]">
                  {post.title}
                </h2>
                {post.description}
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
