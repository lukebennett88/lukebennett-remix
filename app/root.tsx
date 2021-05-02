import * as React from 'react';
import { Outlet } from 'react-router-dom';
import type { LinksFunction, LoaderFunction } from 'remix';
import { Links, LiveReload, Meta, Scripts, useRouteData } from 'remix';

import { Footer } from './components/footer';
import { Nav } from './components/nav';
import stylesUrl from './styles/tailwind.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export const loader: LoaderFunction = async () => {
  return { year: new Date().getFullYear() };
};

export default function App(): React.ReactElement {
  const { year } = useRouteData();
  return (
    <html lang="en-AU">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
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
          <Scripts />
          {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
        </div>
      </body>
    </html>
  );
}

interface ErrorBoundaryProps {
  error: Error;
}

export function ErrorBoundary({
  error,
}: ErrorBoundaryProps): React.ReactElement {
  return (
    <html lang="en-AU">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Oops!</title>
        <Meta />
        <Links />
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
