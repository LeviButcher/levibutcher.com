import type { MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

const PageHeader = () => {
  return (
    <header className="bg-blue-400 text-3xl">
      <nav className="container mx-auto flex align-bottom py-4">
        <Link to="/" className="mr-auto text-4xl">
          <h4>Levi Butcher</h4>
        </Link>
        <Link to="projects">Projects</Link>
      </nav>
    </header>
  );
};
const PageFooter = () => {
  return (
    <footer className="bg-slate-300">
      <div className="container mx-auto p-2">
        Created by Levi Butcher - Built with Remix!!!
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="grid grid-rows-[auto,1fr,auto] h-screen">
          <PageHeader />
          <main>
            <Outlet />
          </main>
          <PageFooter />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
