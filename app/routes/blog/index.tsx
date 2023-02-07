export default function BlogIndex() {
  return (
    <div className="buffer-padded">
      <header>
        <h1 className="text-6xl">Blog</h1>
      </header>
      <section className="grid grid-rows-6 gap-8 py-8">
        <article className="p-4 outline">
          <header>Into FP</header>
          <p>We dive into FP here</p>
        </article>
        <article className="p-4 outline">
          <header>My Fake Blog</header>
          <p>I explore something new here</p>
        </article>
      </section>
    </div>
  );
}
