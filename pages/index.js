import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Joren Rothman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Hi!</span>
          <br /> my name is <span>Joren Rothman</span>
          <br /> I am a <span>webdeveloper</span>.
        </h1>
        <nav className={styles.nav}>
          <Link href="/work">Work</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </main>
    </div>
  );
}
