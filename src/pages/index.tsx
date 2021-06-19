import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        {/* left div */}
        <div className={""}>
          <Profile />
        </div>
        {/* right dvi */}
        <div></div>
      </section>
    </div>
  );
}
