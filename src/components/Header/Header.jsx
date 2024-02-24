import styles from "./Header.module.css";

export default function Header() {
  return <header className={styles.header}>
    <div className={styles.logo}>
    <p className={styles.logoText}>Learn English</p></div>
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.navItem}>Log In</li>
        <li className={styles.navItem}>Sign Up</li>
      </ul>
    </nav>
  </header>;
}