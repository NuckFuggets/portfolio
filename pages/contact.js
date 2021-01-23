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

export default function Contact({ router }) {
  return (
    <div>
      <Head>
        <title>Contact - Joren Rothman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          Say <BoldText>hello</BoldText> @
          <br /> <BoldText>rothmanjoren@gmail.com</BoldText>
        </Title>
        <Navigation currentRoute={router.route} light={true}></Navigation>
      </Main>
    </div>
  );
}
