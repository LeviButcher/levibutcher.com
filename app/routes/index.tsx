export default function Index() {
  return (
    <section className="container flex items-center justify-center gap-10 mx-auto my-10 h-4/5">
      <figure className="max-sm:hidden">
        <img
          height={480}
          width={480}
          className="rounded-full bg-gradient-to-tr from-blue-500 outline-blue-400 outline-offset-4 outline hover:animate-spin"
          src="https://avatars.githubusercontent.com/u/31522433?v=4"
        />
      </figure>
      <article className="p-4 transition-transform outline hover:scale-110">
        <header className="mb-2 text-3xl font-bold ">
          <h1>Hello, I'm Levi Butcher</h1>
        </header>
        <p>This is my new website, not much is here yet!</p>
      </article>
    </section>
  );
}
