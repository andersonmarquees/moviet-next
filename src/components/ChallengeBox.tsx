import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Win {activeChallenge.amount}</header>

          <main>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>New Challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailButton}
              onClick={resetChallenge}
            >
              Fail
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completed
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Complete a cycle to receive a challenge</strong>
          <p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="icons/level-up.svg" alt="Level up" />
            <span>Complete the challenge and level up</span>
          </p>
        </div>
      )}
    </div>
  );
}
