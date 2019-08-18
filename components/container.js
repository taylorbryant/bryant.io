import PropTypes from "prop-types";
import React from "react";

function Container(props) {
  return (
    <div
      className={`max-w-4xl mx-auto ${
        props.disablePadding ? `` : `p-4 md:p-8`
      } w-full`}
    >
      {props.children}
    </div>
  );
}

Container.defaultProps = {
  disablePadding: false
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  disablePadding: PropTypes.bool
};

export default Container;
