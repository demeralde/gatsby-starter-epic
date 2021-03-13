import { render } from "@testing-library/react";
import React from "react";

import { Global } from "jest.setup";

import SEO, { Props } from "./SEO";

declare const global: Global;

describe("<SEO>", () => {
  let props: Props;
  const getComponent = () => render(<SEO {...props} />);

  beforeEach(() => {
    props = {
      description: "Description",
      title: "Title",
      meta: [{ name: "attr", content: "value" }],
    };

    global.useStaticQueryMock.mockImplementation(() => ({
      ...global.SiteData,
    }));
  });

  it("it successfully renders", () => {
    getComponent();
  });
});
