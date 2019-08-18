import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";
import "../style.css";

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{props.children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
