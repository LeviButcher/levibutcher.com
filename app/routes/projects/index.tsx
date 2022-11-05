import { useLoaderData } from "@remix-run/react";

//https://docs.github.com/en/rest/repos/repos
export function loader() {
  return fetch("https://api.github.com/orgs/Remix/repos").then((x) => x.json());
}

export default function Index() {
  const data = useLoaderData();

  return (
    <section className="container mx-auto my-4">
      <header className="mb-4 text-4xl">
        <h1>Projects</h1>
      </header>
      <div className="grid grid-cols-3 gap-2">
        {data.map((x: any) => (
          <article
            className="p-2 rounded-sm hover:bg-slate-200 bg-slate-300"
            key={x.id}
          >
            <header className="font-bold">{x.name}</header>
            <p>{x.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
