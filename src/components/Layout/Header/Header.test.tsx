import { render } from "@testing-library/react";
import React from "react";

import { Global } from "jest.setup";

import Header from "./Header";

declare const global: Global;

describe("<Header>", () => {
  const getComponent = () => render(<Header />);

  beforeEach(() => {
    global.useStaticQueryMock.mockImplementation(() => ({
      ...global.SiteData,
    }));
  });

  it("it successfully renders", () => {
    const container = getComponent();
    container.getByText(global.SiteData.site.siteMetadata.title);
  });
});
