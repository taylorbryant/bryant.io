import React from "react";

import PageLayout from "./page-layout";

function IndexPageLayout({ children, title }) {
  return (
    <PageLayout>
      <div className="flex flex-col md:justify-between md:flex-row">
        <div className="md:w-1/2">
          <h1 className="mb-6 text-3xl font-bold md:mb-0">{title}</h1>
        </div>

        <div className="md:w-1/2">{children}</div>
      </div>
    </PageLayout>
  );
}

export default IndexPageLayout;
