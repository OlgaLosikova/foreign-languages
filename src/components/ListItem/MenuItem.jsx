import styles from "./MenuItem.module.css"

export default function MenuItem({textMenu, icon}) {
    
      return (
        <li className={styles.navItem}>{textMenu}</li>
    );
  }