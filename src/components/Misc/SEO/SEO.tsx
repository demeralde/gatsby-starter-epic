import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Helmet, HelmetProps } from "react-helmet";

import ogImage from "assets/images/og:image.png";

export type Props = {
  description?: string;
  title?: string;
  meta?: HelmetProps["meta"];
};

const SEO = ({ description, meta = [], title }: Props): React.ReactElement => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `,
  );

  const baseTitle = site.siteMetadata.title;
  const metaTitle = title || baseTitle;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      bodyAttributes={{ class: "overflow-x-hidden m-0" }}
      title={title}
      titleTemplate={title ? `${baseTitle} | %s` : baseTitle}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "og:title",
          content: metaTitle,
        },
        {
          name: "og:description",
          content: metaDescription,
        },
        {
          name: "og:image",
          content: `${site.siteMetadata.siteUrl}${ogImage}`,
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:title",
          content: metaTitle,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        ...meta,
      ]}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default SEO;
