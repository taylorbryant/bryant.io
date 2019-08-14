import Container from "./container";

function Footer() {
  return (
    <footer className="bg-gradient-green-blue">
      <Container>
        <ul className="flex items-center justify-between text-sm text-white">
          <li>
            Created by{" "}
            <a href="https://bryant.io" target="_blank" className="font-bold">
              Taylor Bryant
            </a>
          </li>

          <li>
            <a
              href="https://github.com/oddstronaut/tailwind-next"
              target="_blank"
              className="font-bold"
            >
              GitHub
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}

export default Footer;
