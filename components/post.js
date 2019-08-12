import Container from "./container";
import Layout from "./layout";

function Post(props) {
  return (
    <Layout>
      <Container>
        <div className="markdown-body">{props.children}</div>
      </Container>
    </Layout>
  );
}

export default Post;
