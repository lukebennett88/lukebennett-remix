import { useLoaderData } from "@remix-run/react";
import PortableText from "react-portable-text";
import { json, LoaderFunction } from "remix";

import { SanityPost } from "~/types/sanity";
import { getProseClasses } from "~/utils/get-prose-classes";
import { pageWrapperClasses } from "~/utils/page-wrapper-classes";
import { sanityClient } from "~/utils/sanity-client";

export const loader: LoaderFunction = async ({ params }) => {
  const { slug = "" } = params;
  let response: SanityPost | undefined;
  try {
    response = await sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug });
  } catch (error) {
    throw new Error("Error loading post");
  }
  return json(response);
};

export default function Post(): JSX.Element | null {
  const post = useLoaderData<SanityPost>();
  if (!post) return null;
  return (
    <div className={pageWrapperClasses}>
      <div className={getProseClasses({ isCentered: true })}>
        <h1 className="text-4xl">{post.title}</h1>
        <PortableText content={post.body} serializers={{}} className="mt-12" />
      </div>
    </div>
  );
}
