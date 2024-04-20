import { observer } from "mobx-react-lite";
import store from "../../stores/WordsStore";
import EditButton from "../Buttons/EditButton";
import MenuItem from "../ListItem/MenuItem";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

const Header = observer(({ onClickEditButton }) => {
  const location = useLocation();
  const { hideButton } = store;
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p className={styles.logoText}>Learn English</p>
      </div>
      <nav className={styles.navigation}>
        <div className={styles.ulItem}>
          {location.pathname === "/cards" ? (
            <Link to="/" className={styles.link}>
              <EditButton textButton="К списку слов" color="primary" />
            </Link>
          ) : (
            <>
              <EditButton
                onClickEditButton={onClickEditButton}
                textButton="Добавить слово"
                color="primary"
                disabled={hideButton}
              />
              <Link to="/cards" className={styles.link}>
                <EditButton textButton="Тренироваться" color="secondary" />
              </Link>
            </>
          )}
        </div>
        <ul className={styles.ul}>
          <div className={styles.ulItem}>
            <MenuItem textMenu="Зарегистрироваться" />
            <MenuItem textMenu="Войти" />
          </div>
        </ul>
      </nav>
    </header>
  );
});
export default Header;
