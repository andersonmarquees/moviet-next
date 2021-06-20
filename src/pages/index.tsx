import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

import Head from "next/head";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>start | move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          {/* left div */}
          <div className={""}>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          {/* right dvi */}
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
