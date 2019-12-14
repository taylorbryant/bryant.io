import PropTypes from "prop-types";
import React from "react";

function Card(props) {
  return (
    <article className="p-4 my-4 bg-yellow-400 border-black md:p-8">
      {props.children}
    </article>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card;
