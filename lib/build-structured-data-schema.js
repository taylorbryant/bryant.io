import React from "react";

export default function buildStructuredDataSchema(structuredData) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
      // eslint-disable-next-line react/no-danger
      type="application/ld+json"
    />
  );
}
