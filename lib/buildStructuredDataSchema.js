export default function buildStructuredDataSchema(structuredData) {
  return (
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
      type="application/ld+json"
    />
  );
}
