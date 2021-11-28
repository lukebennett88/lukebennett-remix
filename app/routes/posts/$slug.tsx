import { useLoaderData } from "@remix-run/react";
import PortableText from "react-portable-text";
import type { LoaderFunction } from "remix";

import { SanityPost } from "~/types/sanity";
import { sanityClient } from "~/utils/sanity-client";

export const loader: LoaderFunction = async ({ params }) => {
  const { slug = "" } = params;
  let response: SanityPost | undefined;
  try {
    response = await sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug });
  } catch (error) {
    throw new Error("Error loading post");
  }
  return response;
};

export default function TeamMember(): JSX.Element | null {
  const post = useLoaderData<SanityPost>();
  if (!post) return null;
  return (
    <div className="max-w-5xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:py-32 lg:px-8">
      <h1 className="text-4xl">{post.title}</h1>
      <PortableText content={post.body} serializers={{}} className="mt-12 prose dark:prose-dark" />
    </div>
  );
}
