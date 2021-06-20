import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://github.com/andersonmarquees.png" alt="avatar" />
      <div>
        <strong>Anderson Marques</strong>
        <p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
