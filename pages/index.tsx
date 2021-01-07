import Head from 'next/head';
import styled from "styled-components";

const Home = () => (
  <>
    <Head>
      <title>Ian Solano-Kamaiko</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Title>Title</Title>
      <p>hello</p>
    </main>
  </>
);

export default Home;

const Title = styled.h1`
  color: red;
  font-family: ${({ theme: { fontFamily }}) => fontFamily};
`;
