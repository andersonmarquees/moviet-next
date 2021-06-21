import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Congratulations!</strong>
        <p>You pass the next level!</p>

        <button type="button" onClick={closeLevelUpModal}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/close.svg" alt="close modal" />
        </button>
      </div>
    </div>
  );
}
