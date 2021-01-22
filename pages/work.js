import Card from "../components/Card";
import Head from "next/head";
import data from "../data/work.json";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1218px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #01022e;
  font-weight: normal;
  font-size: 56px;
  line-height: 71px;
  margin-top: 64px;
  margin-bottom: 32px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -42px;
  margin-top: -32px;
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
      </main>
    </Container>
  );
}
