import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const TOP_LEVEL_ROUTES = [
  { route: `/writing`, label: `Writing` },
  { route: `/projects`, label: `Projects` }
];

function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-col w-full max-w-2xl p-3 mx-auto md:p-6 md:items-center md:justify-between md:flex-row">
        <h1>
          <Link href="/">
            <a className="text-2xl no-underline md:px-2 md:py-1 md:bg-primary">
              bryant.io
            </a>
          </Link>
        </h1>
        <nav className="mt-3 md:mt-0">
          <h1 className="sr-only">Main navigation</h1>
          <ul className="flex ">
            {TOP_LEVEL_ROUTES.map(({ route, label }) => (
              <li className="mr-6 md:mr-0 md:ml-6" key={route}>
                <Link href={route}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
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
