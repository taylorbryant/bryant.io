import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full max-w-2xl px-3 pt-3 mx-auto md:px-6 md:pt-6 pb-9 md:pb-16">
        <h1>
          <Link href="/">
            <a className="text-2xl no-underline">bryant.io</a>
          </Link>
        </h1>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="w-full max-w-2xl px-3 mx-auto text-sm py-9 md:px-6 md:py-8">
        Built using{` `}
        <a href="">Next.js</a>
        {` `}
        and{` `}
        <a href="">Tailwind CSS</a>.
      </footer>
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageLayout;
