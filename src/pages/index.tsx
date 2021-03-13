import React from "react";

import SEO from "components/Misc/SEO";
import Template from "components/Misc/Template";

const IndexPage = (): React.ReactElement => (
  <Template>
    <SEO title="Hello world" />
    <div className="container mx-auto p-8">
      <p>This is a starter for Gatsby.</p>
    </div>
  </Template>
);

export default IndexPage;
