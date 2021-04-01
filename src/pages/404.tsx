import React from "react";

import Template from "components/Misc/Template";
import SEO from "components/Misc/SEO";

const NotFoundPage = (): React.ReactElement => (
  <Template>
    <SEO title="Page Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Template>
);

export default NotFoundPage;
