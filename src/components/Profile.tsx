import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/andersonmarquees.png" alt="avatar" />
      <div>
        <strong>Anderson Marques</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}
