import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import styles from "./Header.module.css";

const Header = () => {
  return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.navbar}>
          <Nav position="" />
        </div>
      </header>
   
  );
};

export default Header;
