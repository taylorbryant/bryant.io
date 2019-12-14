import PropTypes from "prop-types";
import React from "react";

import Container from "./container";

function Hero(props) {
  return (
    <section className="py-6 bg-gradient-green-blue sm:py-12 md:py-24">
      <Container>{props.children}</Container>
    </section>
  );
}

Hero.propTypes = {
  children: PropTypes.node.isRequired
};

export default Hero;
