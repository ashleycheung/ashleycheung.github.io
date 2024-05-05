import { Portfolio } from "@/components/portfolio/Portfolio";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashley Cheung</title>
        <meta name="description" content="Ashley Cheung's Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <Portfolio />
      </main>
    </>
  );
}
