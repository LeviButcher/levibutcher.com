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
        <header className="text-3xl bg-blue-800 dark:bg-slate-800">
            <nav className="container flex gap-4 py-4 px-8 mx-auto align-bottom">
                <Link
                    to="/"
                    className="mr-auto text-4xl text-white transition-colors hover:text-cyan-300"
                >
                    <h4>Levi Butcher</h4>
                </Link>
                <Link
                    to="resume"
                    className="text-white transition-colors hover:text-cyan-300"
                >
                    Resume
                </Link>
                <Link
                    to="projects"
                    className="text-white transition-colors hover:text-cyan-300"
                >
                    Projects
                </Link>
                <Link
                    to="blog"
                    className="text-white transition-colors hover:text-cyan-300"
                >
                    Blog
                </Link>
            </nav>
        </header>
    );
};

const PageFooter = () => {
    return (
        <footer className="text-white bg-blue-800 dark:bg-slate-800">
            <div className="container py-4 px-8 mx-auto">
                Created by Levi Butcher - Built with Remix!!!
            </div>
        </footer>
    );
};


const Spinner = () => (
    <div role="status">
        <svg
            aria-hidden="true"
            className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-200 dark:fill-cyan-200"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
            />
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
            />
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
);

const LoadingPage = () => {
    const transition = useTransition();

    const isLoading = transition.state === "loading";

    if (!isLoading) return null;

    return (
        <aside className="absolute right-20 bottom-20">
            <article className="grid grid-cols-[1fr,auto] items-center gap-2 p-4 text-white transition-colors bg-blue-800 rounded dark:bg-cyan-500">
                <Spinner />
                <div>
                    <header className="text-xl">Loading...</header>
                    <p className="text-sm font-light">{transition.location?.pathname}</p>
                </div>
            </article>
        </aside>
    );
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body className="relative transition-colors bg-slate-50 dark:bg-slate-700 dark:text-slate-300">
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
