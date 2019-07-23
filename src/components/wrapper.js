/** @jsx jsx */
import { jsx, Container, Layout, Main } from "theme-ui";

function Wrapper(props) {
  return (<Layout>
    <Main>
      <Container>{props.children}</Container>
    </Main>
  </Layout>);
}

export default Wrapper;
