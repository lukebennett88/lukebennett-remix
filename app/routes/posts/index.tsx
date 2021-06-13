import { Link, LoaderFunction, MetaFunction, useRouteData } from 'remix';

import { SanityPost } from '../../../types/sanity';
import { sanityClient } from '../../utils/sanity-client';

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
      <div className="px-4 prose dark:prose-dark sm:px-6 lg:px-8">
        <h1>Featured Posts</h1>
      </div>
      <article className="mt-12">
        <ul className="grid gap-8">
          {posts.map((post) => (
            <li key={post._id}>
              <Link
                to={`/posts/${post.slug.current}/`}
                className="block px-4 py-6 transition duration-300 ease-in-out border-2 border-teal-600 rounded-lg transform-gpu dark:border dark:border-orange-400 dark:border-opacity-20 dark:hover:border-opacity-100 sm:px-6 lg:px-8 sm:py-8 lg:py-10 dark:hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1 hover:scale-105"
              >
                <article className="prose dark:prose-dark">
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
