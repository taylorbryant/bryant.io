import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import Container from "./container";

function Footer() {
  return (
    <footer className="bg-gradient-green-blue">
      <Container>
        <nav className="flex items-center justify-between text-sm text-white">
          <p>
            Built using{" "}
            <a href="https://nextjs.org" target="_blank" className="font-bold">
              Next.js
            </a>{" "}
            and{" "}
            <a href="" target="_blank" className="font-bold">
              Tailwind CSS
            </a>
            . Read the code{" "}
            <a
              href="https://github.com/taylorbryant/bryant.io"
              target="_blank"
              className="font-bold"
            >
              here
            </a>
            .
          </p>

          <ul className="flex">
            {[
              { url: `https://github.com/taylorbryant`, icon: faGithub },
              { url: `https://twitter.com/tayl_rbryant`, icon: faTwitter },
              {
                url: `https://www.linkedin.com/in/taylorjamesbryant/`,
                icon: faLinkedinIn
              }
            ].map(item => (
              <li className="ml-8" key={item.url}>
                <a href={item.url} target="_blank">
                  <FontAwesomeIcon className="h-8 w-8" icon={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;
