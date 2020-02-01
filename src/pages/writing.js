import Link from "next/link";
import React from "react";

import IndexPageLayout from "../components/index-page-layout";
// eslint-disable-next-line import/default
import posts from "../lib/posts";

function WritingPage() {
  return (
    <IndexPageLayout title="Writing">
      {posts.map(post => (
        <div className="mb-6" key={post.title}>
          <h3 className="mb-3 text-xl">
            <Link href={post.path}>
              <a>{post.title}</a>
            </Link>
          </h3>
          <p className="leading-relaxed">{post.summary}</p>
        </div>
      ))}
    </IndexPageLayout>
  );
}

export default WritingPage;
