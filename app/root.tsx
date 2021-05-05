import type { LinksFunction, LoaderFunction } from '@remix-run/react';
import {
  Links,
  Meta,
  Scripts,
  useLiveReload,
  useRouteData,
} from '@remix-run/react';
import { Outlet } from 'react-router-dom';

import { Footer } from './components/footer';
import { Nav } from './components/nav';
import stylesUrl from './styles/tailwind.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export const loader: LoaderFunction = async () => {
  return { year: new Date().getFullYear() };
};

export default function App(): JSX.Element {
  const { year } = useRouteData();
  useLiveReload();

  return (
    <html lang="en-AU">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg" />
        <Meta />
        <Links />
      </head>
      <body className="bg-teal-600 dark:bg-orange-400">
        <div className="flex flex-col min-h-screen bg-white border-t-8 border-teal-600 dark:bg-gray-800 dark:border-orange-400">
          <Nav />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer year={year} />
        </div>
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Replace this UI with what you want users to see when your app throws
            uncaught errors.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
