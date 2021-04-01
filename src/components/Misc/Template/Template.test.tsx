import { render } from "@testing-library/react";
import React from "react";

import { Global } from "jest.setup";

import Template from "./Template";
import { Props } from "./types";

declare const global: Global;

describe("<Template>", () => {
  let props: Props;
  const children = "children";
  const getComponent = () => render(<Template {...props} />);

  beforeEach(() => {
    props = {
      children,
      showHeader: false,
      showFooter: false,
    };

    global.useStaticQueryMock.mockImplementation(() => ({
      ...global.SiteData,
    }));
  });

  it("it contains `props.children`", () => {
    const container = getComponent();
    container.getByText(children);
  });

  describe("when `props.showHeader` is `true`", () => {
    beforeEach(() => {
      props.showHeader = true;
    });

    it("renders the header", () => {
      const container = getComponent();
      container.getByTestId("header");
    });
  });

  describe("when `props.showFooter` is `true`", () => {
    beforeEach(() => {
      props.showFooter = true;
    });

    it("renders the footer", () => {
      const container = getComponent();
      container.getByTestId("footer");
    });

    it("renders credits", () => {
      const container = getComponent();
      container.getByText("Daniel Spajic");
    });
  });
});
