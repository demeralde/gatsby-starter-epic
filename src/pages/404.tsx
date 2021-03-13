import React from "react";

import Layout from "components/Misc/Template";
import SEO from "components/Misc/SEO";

const NotFoundPage = (): React.ReactElement => (
  <Layout>
    <SEO title="Page Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
