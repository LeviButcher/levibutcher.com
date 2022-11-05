import type { MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
} from "@remix-run/react";
import styles from "./styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Levi Butcher",
  viewport: "width=device-width,initial-scale=1",
});

const PageHeader = () => {
  return (
    <header className="text-3xl bg-blue-400">
      <nav className="container flex py-4 mx-auto align-bottom">
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
      <div className="container p-2 mx-auto">
        Created by Levi Butcher - Built with Remix!!!
      </div>
    </footer>
  );
};

const LoadingPage = () => {
  const transition = useTransition();

  const isLoading = transition.state === "loading";

  if (!isLoading) return null;

  return (
    <article className="absolute p-4 bg-red-400 right-20 bottom-20">
      <header className="text-lg">Loading</header>
      <span className="font-thin">{transition.location.pathname}</span>
    </article>
  );
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="relative">
        <div className="grid grid-rows-[auto,1fr,auto] h-screen">
          <PageHeader />
          <main>
            <Outlet />
          </main>
          <PageFooter />
          <LoadingPage />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
