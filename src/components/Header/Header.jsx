import EditButton from "../Buttons/EditButton";
import MenuItem from "../ListItem/MenuItem";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header({onClickEditButton}) {
  const [page, setPage] = useState(false);
  const handleSetPage = () => {
    setPage(!page);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p className={styles.logoText}>Learn English</p>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.ul}>
          <div className={styles.ulItem}>
            {page ? (
              <Link to="/" className={styles.link}>
                <EditButton
                  onClickEditButton={handleSetPage}
                  textButton="К списку слов"
                  color="primary"
                />
              </Link>
            ) : (
              <>
                <EditButton
                  onClickEditButton={onClickEditButton}
                  textButton="Добавить слово"
                  color="primary"
                />
                <Link to="/cards" className={styles.link}>
                  <EditButton
                    onClickEditButton={handleSetPage}
                    textButton="Тренироваться"
                    color="secondary"
                  />
                </Link>
              </>
            )}
          </div>
          <div className={styles.ulItem}>
            <MenuItem textMenu="Зарегистрироваться" />
            <MenuItem textMenu="Войти" />
          </div>
        </ul>
      </nav>
    </header>
  );
}
