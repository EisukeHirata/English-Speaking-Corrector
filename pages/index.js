import Head from "next/head";
import EnglishSpeakingCorrector from "../components/EnglishSpeakingCorrector";

export default function Home() {
  return (
    <div>
      <Head>
        <title>English Speaking Corrector</title>
        <meta name="description" content="English Speaking Corrector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <EnglishSpeakingCorrector />
      </main>
    </div>
  );
}
