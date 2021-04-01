import React from "react";

import Header from "components/Layout/Header";

import { Container, Main, Footer, FooterInner, Link } from "./styles";
import { Props } from "./types";

const Template = ({
  children,
  showHeader = true,
  showFooter = true,
}: Props): React.ReactElement => (
  <Container>
    {showHeader && <Header />}
    <Main>{children}</Main>
    {showFooter && (
      <Footer data-testid="footer">
        <FooterInner>
          Template by{" "}
          <Link href="https://danieljs.tech" target="_blank" rel="noreferrer">
            Daniel Spajic
          </Link>
        </FooterInner>
      </Footer>
    )}
  </Container>
);
export default Template;
