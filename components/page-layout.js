import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen space-y-12 text-gray-800 bg-gray-100 md:space-y-24">
      <header className="w-full max-w-2xl px-3 pt-3 md:pt-6 mx-auto md:px-6 flex">
        <img src="https://www.gravatar.com/avatar/889987f164dfd9c869bb863c40d9cc12" className="rounded-full w-8 h-8" />
<h1>
          <Link href="/">
            <a className="ml-3 text-2xl no-underline">
              Taylor Bryant
            </a>
          </Link>
        </h1>
      </header>

      <main className="flex-1 space-y-12 md:space-y-24">{children}</main>

      <footer className="w-full max-w-2xl text-center md:text-left px-3 pb-3 md:pb-6 mx-auto text-xs md:px-6">
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
