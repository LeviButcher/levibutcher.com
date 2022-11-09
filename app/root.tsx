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
      <nav className="container flex gap-4 px-8 py-4 mx-auto align-bottom">
        <Link
          to="/"
          className="mr-auto text-4xl transition-colors text-blue-50 hover:text-blue-300"
        >
          <h4>Levi Butcher</h4>
        </Link>
        <Link
          to="resume"
          className="transition-colors text-blue-50 hover:text-blue-300"
        >
          Resume
        </Link>
        <Link
          to="projects"
          className="transition-colors text-blue-50 hover:text-blue-300"
        >
          Projects
        </Link>
        <Link
          to="blog"
          className="transition-colors text-blue-50 hover:text-blue-300"
        >
          Blog
        </Link>
      </nav>
    </header>
  );
};
const PageFooter = () => {
  return (
    <footer className="bg-slate-300">
      <div className="container p-2 px-8 mx-auto">
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
          <main className="py-10">
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
