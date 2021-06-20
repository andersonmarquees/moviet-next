import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useContext(ChallengesContext);

  const { resetCountDown } = useContext(CountdownContext);

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountDown();
  };

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountDown();
  };

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
              onClick={handleChallengeFailed}
            >
              Fail
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
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
