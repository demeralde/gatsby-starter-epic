import tw, { styled } from "twin.macro";

const Nav = styled.nav(() => [tw`bg-white border-b`]);

const Inner = styled.div(() => [tw`container mx-auto py-4 px-8`]);

const Title = styled.h1(() => [tw`text-xl`]);

export { Nav, Inner, Title };
