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
