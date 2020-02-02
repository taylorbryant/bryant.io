import PropTypes from "prop-types";
import React from "react";

import PageLayout from "./page-layout";

function IndexPageLayout({ children, title }) {
  return (
    <PageLayout>
      <section className="flex flex-col md:justify-between md:flex-row">
        <div className="md:w-1/3">
          <h1 className="mb-6 text-3xl font-bold md:mb-0">{title}</h1>
        </div>

        <div className="md:w-2/3">{children}</div>
      </section>
    </PageLayout>
  );
}

IndexPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default IndexPageLayout;
