import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-gray-100">
      <header className="w-full max-w-2xl p-6 mx-auto">
        <h1>
          <Link href="/">
            <a className="text-2xl no-underline">bryant.io</a>
          </Link>
        </h1>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="w-full max-w-2xl p-6 mx-auto text-xs">
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
