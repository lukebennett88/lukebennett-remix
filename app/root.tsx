import { json, LinksFunction, LoaderFunction, Outlet, useCatch, useLoaderData } from "remix";

import { Document } from "~/components/document";
import { Layout } from "~/components/layout";
import globalStylesUrl from "~/styles/global.css";

// https://remix.run/api/app#links
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStylesUrl }];
};

export const loader: LoaderFunction = async () => {
  return json({ year: new Date().getFullYear() });
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  const { year } = useLoaderData();
  return (
    <Document>
      <Layout year={year}>
        <Outlet />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const { year } = useLoaderData();
  return (
    <Document title="Error!">
      <Layout year={year}>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>Hey, developer, you should replace this with what you want your users to see.</p>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = <p>Oops! Looks like you tried to visit a page that you do not have access to.</p>;
      break;
    case 404:
      message = <p>Oops! Looks like you tried to visit a page that does not exist.</p>;
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  const { year } = useLoaderData();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout year={year}>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}
