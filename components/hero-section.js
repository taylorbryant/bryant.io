import Container from "./container";

function Hero(props) {
  return (
    <section className="bg-gradient py-24 mb-8">
      <Container>{props.children}</Container>
    </section>
  );
}

export default Hero;
