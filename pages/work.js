import Card from "../components/Card";
import Head from "next/head";
import Link from "next/link";
import data from "../data/work.json";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1218px;
  margin: 0 auto;

  @media (max-width: 1302px) {
    max-width: calc(100% - 84px);
  }

  @media (max-width: 1024px) {
    max-width: calc(100% - 40px);
  }
`;

const Title = styled.h1`
  color: #01022e;
  font-weight: normal;
  font-size: 56px;
  line-height: 71px;
  margin-top: 64px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-top: 32px;
    margin-bottom: 16px;
    font-size: 48px;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -42px;
  margin-top: -32px;
  margin-bottom: 32px;
`;

const Nav = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #01022e;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

const LinkSpacer = styled.span`
  margin-left: 32px;
  display: inline-block;
`;

export default function About() {
  return (
    <Container>
      <Head>
        <title>Work - Joren Rothman</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          href="/fonts/HKNova-Bold.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          href="/fonts/HKNova-Regular.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          href="/fonts/HKNova-HeavyR.woff2"
        />
      </Head>

      <main>
        <Title>Work</Title>
        <Grid>
          {data.items.map((item) => (
            <Card key={item.id} {...item}></Card>
          ))}
        </Grid>
        <Nav>
          <Link href="/">Home</Link>
          <LinkSpacer></LinkSpacer>
          <Link href="/contact">Contact</Link>
        </Nav>
      </main>
    </Container>
  );
}
