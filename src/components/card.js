import PropTypes from "prop-types";
import React from "react";

function Card(props) {
  return (
    <article className="p-4 border-b-4 border-l-4 border-yellow-400 md:p-8">
      {props.children}
    </article>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card;
