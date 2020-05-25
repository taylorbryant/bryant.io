import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full max-w-2xl pt-6 mx-auto px-6 pb-9 md:pb-16">
        <h1>
          <Link href="/">
            <a className="text-xl md:text-2xl no-underline">bryant.io</a>
          </Link>
        </h1>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="w-full max-w-2xl mx-auto text-sm p-6">
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
