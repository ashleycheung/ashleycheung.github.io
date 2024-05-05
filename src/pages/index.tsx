import { Portfolio } from "@/components/portfolio/Portfolio";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashley Cheung</title>
        <meta name="description" content="Ashley Cheung's Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={"/assets/profile.png"} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.ashleycheung.com`} />
        <meta property="og:title" content={"Ashley Cheung"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ashleycheung.com" />
        <meta property="twitter:url" content={`https://www.ashleycheung.com`} />
        <meta name="twitter:title" content={"Ashley Cheung"} />
        <meta
          name="twitter:description"
          content={"Ashley Cheung's Personal Portfolio"}
        />
        <meta name="twitter:image" content={"/assets/profile.png"} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <Portfolio />
      </main>
    </>
  );
}
