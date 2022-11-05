export default function Index() {
  return (
    <section className="container flex items-center justify-center gap-10 mx-auto my-10 h-4/5">
      <figure className="max-sm:hidden">
        <img
          height={480}
          width={480}
          className="rounded-full bg-gradient-to-tr from-blue-500"
          src="https://source.unsplash.com/collection/928423/480x480"
        />
      </figure>
      <article className="p-4 outline">
        <header className="mb-2 text-3xl font-bold">
          <h1>Hello, I'm Levi Butcher</h1>
        </header>
        <p>This is my new website, not much is here yet!</p>
      </article>
    </section>
  );
}
