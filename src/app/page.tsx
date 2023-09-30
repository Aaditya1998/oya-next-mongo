import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/variables.module.scss";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oya</title>
        <meta
          name="description"
          content="Generated For Ecommerse Application."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button>Click</button>
    </div>
  );
}
