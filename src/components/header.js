import Link from "next/link";
import React from "react";

import Container from "./container";

function Header() {
  return (
    <Container>
      <header className="flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-black uppercase">
            <img
              alt="Taylor Bryant"
              height="73"
              loading="lazy"
              src="/images/svg/logo.svg"
              width="103"
            />
          </a>
        </Link>

        {/* <ul className="flex">
          {[
            { title: "Home", route: "/" }
          ].map(navigationItem => (
            <li className="ml-6 font-black uppercase " key={navigationItem.title}>
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
