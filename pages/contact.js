import Head from "next/head";
import Link from "next/link";
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

const Nav = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

const LinkSpacer = styled.span`
  margin-left: 32px;
  display: inline-block;
`;

export default function Contact() {
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
        <Nav>
          <Link href="/">Home</Link>
          <LinkSpacer></LinkSpacer>
          <Link href="/work">Work</Link>
        </Nav>
      </Main>
    </div>
  );
}
