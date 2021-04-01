import tw, { styled } from "twin.macro";

const Container = styled.nav(() => [tw`font-sans`]);

const Main = styled.main(() => [tw`bg-white`]);

const Footer = styled.footer(() => [tw`bg-gray-100`]);

const FooterInner = styled.div(() => [tw`container mx-auto p-8`]);

const Link = styled.a(() => [
  tw`font-semibold text-indigo-600 hover:text-blue-800 transition-colors`,
]);

export { Container, Main, Footer, FooterInner, Link };
