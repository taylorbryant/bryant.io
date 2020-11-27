import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen space-y-12 text-lg text-gray-800 md:space-y-24">
      <header className="flex items-center w-full max-w-3xl px-3 pt-3 mx-auto md:pt-6 md:px-6">
        <div className="w-10 h-10 rounded-full">
          <img
            alt="An illustration of Taylor with his cat"
            height={40}
            loading="lazy"
            src="https://www.gravatar.com/avatar/889987f164dfd9c869bb863c40d9cc12"
            width={40}
          />
        </div>

        <h1>
          <Link href="/">
            <a className="ml-3 text-2xl no-underline">Taylor Bryant</a>
          </Link>
        </h1>
      </header>

      <main className="flex-1 space-y-12 md:space-y-24">{children}</main>

      <footer className="w-full max-w-3xl px-3 pb-3 mx-auto text-sm text-center md:text-left md:pb-6 md:px-6">
        Built using{` `}
        <a href="https://nextjs.org" rel="noopener noreferrer" target="_blank">
          Next.js
        </a>
        {` `}
        and{` `}
        <a
          href="https://tailwindcss.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Tailwind CSS
        </a>
        .
      </footer>
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
