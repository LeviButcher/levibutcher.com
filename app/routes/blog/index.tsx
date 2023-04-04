import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import * as postA from "./into-fp.mdx";

function postFromModule(mod: any) {
    return {
        slug: mod.filename.replace(/\.mdx?$/, ""),
        ...mod.attributes.meta,
    };
}

export async function loader() {
    // Gross import for each blog posts :/
    return json([postA].map(postFromModule));
}

export default function BlogIndex() {
    const posts = useLoaderData<typeof loader>();

    return (
        <div className="container px-8 mx-auto">
            <header>
                <h1 className="text-6xl">Blog</h1>
            </header>
            <section className="grid grid-rows-6 gap-8 py-8">
                {posts.map((p) => (
                    <article key={p.slug} className="p-4 outline grid grid-cols-[auto,1fr] gap-8 h-56">
                        <img src={p.image} width="300px" className="h-full bg-cover" alt="" />
                        <div>
                            <header>
                                <h2 className="text-6xl">{p.title}</h2>
                            </header>
                            <p>{p.description}</p>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
}
