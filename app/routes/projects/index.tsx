import { useLoaderData } from "@remix-run/react";

//https://docs.github.com/en/rest/repos/repos
export function loader() {
  return fetch("https://api.github.com/orgs/Remix/repos").then((x) => x.json());
}

export default function Index() {
  const data = useLoaderData();

  return (
    <div className="container mx-auto">
      <h1>We are at '/project'!!!</h1>
      <div className="grid grid-cols-3 gap-2">
        {data.map((x: any) => (
          <article className="bg-slate-300 rounded-sm p-2 hover:bg-slate-200">
            <header className="font-bold">{x.name}</header>
            <p>{x.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
