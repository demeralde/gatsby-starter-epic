import { graphql, useStaticQuery } from "gatsby";
import React from "react";

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
    <nav className="bg-white border-b">
      <div className="container mx-auto py-4 px-8">
        <h1 className="text-xl">{title}</h1>
      </div>
    </nav>
  );
};

export default Header;
