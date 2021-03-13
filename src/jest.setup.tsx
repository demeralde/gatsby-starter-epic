import "@testing-library/jest-dom";
import { useStaticQuery } from "gatsby";
import { FixedObject, FluidObject } from "gatsby-image";
import React from "react";

// General interfaces

export interface SiteData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
    };
  };
}

// `Global` interface
export interface Global extends NodeJS.Global {
  fixedImageStub: FixedObject;
  fluidImageStub: FluidObject;
  IconMock: React.ComponentType;
  SiteData: SiteData;
  useStaticQueryMock: jest.Mock;
}

declare const global: Global;

// Globalise common imports to make them available in all test files

global.fluidImageStub = {
  aspectRatio: 300,
  src: "image.png",
  srcSet: "srcset",
  sizes: "30 30",
};

global.fixedImageStub = {
  src: "image.png",
  srcSet: "srcset",
  width: 100,
  height: 100,
};

global.SiteData = {
  site: {
    siteMetadata: {
      title: "Title",
      description: "Title",
      siteUrl: "Title",
    },
  },
};

const Icon = (): React.ReactElement => <div>icon</div>;
global.IconMock = Icon;

global.useStaticQueryMock = useStaticQuery as jest.Mock<Record<string, unknown>>;
