import React from "react";

import Header from "components/Layout/Header";

export type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): React.ReactElement => (
  <div className="font-sans">
    <Header />
    <main className="bg-white">{children}</main>
    <footer className="bg-gray-100">
      <div className="container mx-auto p-8">
        Template by{" "}
        <a
          href="https://danieljs.tech"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-indigo-600 hover:text-blue-800 transition-colors"
        >
          Daniel Spajic
        </a>
      </div>
    </footer>
  </div>
);
export default Layout;
