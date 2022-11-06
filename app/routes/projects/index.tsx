import { useLoaderData } from "@remix-run/react";
import { Octokit, RestEndpointMethodTypes } from "@octokit/rest";

//https://docs.github.com/en/rest/repos/repos
export async function loader() {
  const kit = new Octokit({
    auth: process.env.GITHUB_API,
  });
  const { data } = await kit.rest.repos.listForUser({
    username: "LeviButcher",
  });
  return { projects: data };
}

type Repo =
  RestEndpointMethodTypes["repos"]["listForUser"]["response"]["data"][0];

function RepoCard({ repo }: { repo: Repo }) {
  console.log(repo.owner.avatar_url);
  return (
    <article className="p-4 rounded-sm bg-slate-200 grid grid-rows-[auto,1fr,auto] gap-2 hover:scale-110 transition-transform shadow-sm">
      <header className="flex justify-between font-bold">
        <h4>{repo.name}</h4>
        <span>Stars: {repo.stargazers_count}</span>
      </header>
      <section className="">
        <p className="line-clamp-3">{repo.description}</p>
      </section>
      <footer className="flex justify-between">
        <a href={repo.svn_url}>Github</a>
        {repo.homepage && <a href={repo.homepage}>Site</a>}
      </footer>
    </article>
  );
}

export default function Index() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <section className="container mx-auto my-4">
      <header className="mb-8 text-4xl">
        <h1>Projects</h1>
      </header>
      <section className="grid grid-cols-3 gap-10 align-top">
        {projects.map((x) => (
          <RepoCard repo={x} key={x.id} />
        ))}
      </section>
    </section>
  );
}
