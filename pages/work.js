import Card from "../components/Card";
import Head from "next/head";
import Navigation from "../components/Navigation";
import data from "../data/work.json";
import { motion } from "framer-motion";
import styled from "styled-components";

const Main = styled.main`
  min-height: 100vh;
  width: 100%;
`;

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
  padding-top: 64px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-top: 32px;
    margin-bottom: 16px;
    font-size: 48px;
    padding-top: 32px;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -42px;
  margin-top: -32px;
  margin-bottom: 32px;
`;

export default function Work({ router }) {
  const gridItems = data.items.map((item) => (
    <Card key={item.id} {...item}></Card>
  ));

  return (
    <Main>
      <Container>
        <Head>
          <title>Work - Joren Rothman</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Title>Work</Title>
        <Grid>{gridItems}</Grid>
        <Navigation currentRoute={router.route}></Navigation>
      </Container>
    </Main>
  );
}
