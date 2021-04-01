import React from "react";

import SEO from "components/Misc/SEO";
import Template from "components/Misc/Template";

import { Container } from "./styles";

const IndexPage = (): React.ReactElement => (
  <Template>
    <SEO title="Hello world" />
    <Container>
      <p>This is a starter for Gatsby.</p>
    </Container>
  </Template>
);

export default IndexPage;
