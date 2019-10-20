import PropTypes from "prop-types";
import React from "react";

import Container from "./container";

function Hero(props) {
  return (
    <section className="bg-gradient-green-blue py-12 md:py-24">
      <Container>{props.children}</Container>
    </section>
  );
}

Hero.propTypes = {
  children: PropTypes.node.isRequired
};

export default Hero;
