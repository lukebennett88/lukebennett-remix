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

interface DocumentProps {
  children: React.ReactNode;
}

function Document({ children }: DocumentProps): JSX.Element {
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
          {children}
        </div>
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export default function App(): JSX.Element {
  const { year } = useRouteData();
  return (
    <Document>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer year={year} />
    </Document>
  );
}

interface ErrorBoundaryProps {
  error: Error;
}

export function ErrorBoundary({ error }: ErrorBoundaryProps): JSX.Element {
  const { year } = useRouteData();
  return (
    <Document>
      <main className="flex-1">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
        <p>
          Replace this UI with what you want users to see when your app throws
          uncaught errors.
        </p>
      </main>
      <Footer year={year} />
    </Document>
  );
}
