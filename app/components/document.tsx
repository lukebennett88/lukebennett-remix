import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from "remix";

import { RouteChangeAnnouncement } from "~/components/route-change-announcement";

export function Document({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <html lang="en-AU">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body className="bg-teal-600 dark:bg-orange-400">
        <div className="flex flex-col min-h-screen bg-white border-t-8 border-teal-600 dark:bg-gray-800 dark:border-orange-400">
          {children}
        </div>
        <RouteChangeAnnouncement />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
