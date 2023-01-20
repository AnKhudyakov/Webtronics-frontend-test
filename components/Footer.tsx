import styles from "./Footer.module.css";
import Logo from "./Header/Logo/Logo";
import Nav from "./Header/Nav/Nav";
import social1 from "./assets/social1.svg";
import social2 from "./assets/social2.svg";
import social3 from "./assets/social3.svg";
import social4 from "./assets/social4.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <p className={styles.p1}>
              Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
            </p>
          </div>
          <div className={styles.center}>
            <p className={styles.title}>Company</p>
            <Nav position="footer" />
          </div>
          <div className={styles.right}>
            <p className={styles.title}>Social media</p>
            <div className={styles.media}>
              <Image src={social1} alt="social" className={styles.img} />
              <Image src={social2} alt="social" className={styles.img} />
              <Image src={social3} alt="social" className={styles.img} />
              <Image src={social4} alt="social" className={styles.img} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
