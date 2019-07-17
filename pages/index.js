import "../style.css";

function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center max-w-3xl mx-auto p-4">
      <section>
        <h1 className="font-semibold mb-3 text-xl md:text-4xl">Hi, I'm Taylor Bryant.</h1>
        <p className="text-md md:text-2xl">
          I am a software engineer living in Memphis, TN. I build software
          products using{" "}
          <a
            className="text-indigo-600 underline"
            href="https://reactjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            React
          </a>
          ,{" "}
          <a
            className="text-indigo-600 underline"
            href="https://nextjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Next.js
          </a>
          ,{" "}
          <a
            className="text-indigo-600 underline"
            href="https://expressjs.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Express
          </a>
          , and{" "}
          <a
            className="text-indigo-600 underline"
            href="https://graphql.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            GraphQL
          </a>
          .
        </p>
      </section>
    </main>
  );
}

export default Home;
