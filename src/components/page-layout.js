import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full max-w-2xl p-3 mx-auto md:p-6">
        <h1>
          <Link href="/">
            <a className="text-2xl no-underline">bryant.io</a>
          </Link>
        </h1>
      </header>

      <main className="flex-1 w-full max-w-2xl p-3 mx-auto md:p-6">
        {children}
      </main>

      <footer className="w-full max-w-2xl p-3 mx-auto text-sm md:p-6">
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
