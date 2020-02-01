import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between w-full max-w-2xl p-6 mx-auto">
        <Link href="/">
          <a className="px-2 py-1 text-2xl no-underline bg-primary">
            bryant.io
          </a>
        </Link>
        <ul className="flex">
          {[
            { route: `/`, label: `Home` },
            { route: `/writing`, label: `Writing` },
            { route: `/projects`, label: `Projects` }
          ].map(({ route, label }) => (
            <li className="ml-6" key={route}>
              <Link href={route}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </header>

      <main className="flex-1 w-full max-w-2xl p-6 mx-auto">{children}</main>

      <footer className="w-full max-w-2xl p-6 mx-auto text-sm">
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
