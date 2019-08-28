import Link from "next/link";
import React from "react";

import Container from "./container";

function Header() {
  return (
    <Container>
      <header className="flex items-center justify-between">
        <Link href="/">
          <a className="font-black text-xl uppercase">
            <img alt="Taylor Bryant" src="/static/images/logo.svg" />
          </a>
        </Link>

        {/* <ul className="flex">
          {[
            { title: "Home", route: "/" }
          ].map(navigationItem => (
            <li className="font-black  ml-6 uppercase" key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <a>{navigationItem.title}</a>
              </Link>
            </li>
          ))}
        </ul> */}
      </header>
    </Container>
  );
}

export default Header;
