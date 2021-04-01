import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { Nav, Inner, Title } from "./styles";

const Header = (): React.ReactElement => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );
  const { title } = data.site.siteMetadata;

  return (
    <Nav data-testid="header">
      <Inner>
        <Title>{title}</Title>
      </Inner>
    </Nav>
  );
};

export default Header;
