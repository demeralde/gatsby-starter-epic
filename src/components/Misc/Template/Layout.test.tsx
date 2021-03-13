import { render } from "@testing-library/react";
import React from "react";

import { Global } from "jest.setup";

import Layout, { Props } from "./Layout";

declare const global: Global;

describe("<Layout>", () => {
  let props: Props;
  const children = "children";
  const getComponent = () => render(<Layout {...props} />);

  beforeEach(() => {
    props = {
      children,
    };

    global.useStaticQueryMock.mockImplementation(() => ({
      ...global.SiteData,
    }));
  });

  it("it contains `props.children`", () => {
    const container = getComponent();
    container.getByText(children);
  });

  it("renders credits", () => {
    const container = getComponent();
    container.getByText("Daniel Spajic");
  });
});
