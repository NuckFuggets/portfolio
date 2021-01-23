import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/Navigation";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #01002d;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/images/home-background.svg");
  background-repeat: no-repeat;
  background-position: top right;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 56px;
  line-height: 1.267857143;
  color: #ffffff;
  padding: 0 20px;
  @media (max-width: 500px) {
    font-size: 48px;
  }

  @media (max-width: 400px) {
    font-size: 38px;
  }
`;

const BoldText = styled.span`
  font-weight: 900;
`;

export default function Home({ router }) {
  return (
    <div>
      <Head>
        <title>Home - Joren Rothman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          <BoldText>Hi!</BoldText>
          <br /> my name is <BoldText>Joren Rothman</BoldText>
          <br /> I am a <BoldText>webdeveloper</BoldText>.
        </Title>
        <Navigation light={true} currentRoute={router.route}></Navigation>
      </Main>
    </div>
  );
}
