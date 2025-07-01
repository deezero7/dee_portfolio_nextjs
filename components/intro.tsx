"use client ";

const Intro = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">
          Hello, this is{" "}
          <a className="underline decoration-sky-500 text-5xl">
            Deependra singh
          </a>
          .{" "}
        </h1>
        <p className="text-lg">Explore my projects and skills.</p>
      </main>
    </div>
  );
};
export default Intro;
