import Card from "../components/Card";
import Head from "next/head";
import data from "../data/work.json";
import styles from "../styles/Work.module.css";

export default function About() {
  return (
    <div className={styles.container}>
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

      <main className={styles.main}>
        <h1 className={styles.title}>Work</h1>

        <div className={styles.grid}>
          {data.items.map((item) => (
            <Card key={item.id} {...item}></Card>
          ))}
        </div>
      </main>
    </div>
  );
}
