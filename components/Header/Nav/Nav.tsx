import Link from "next/link";
import styles from "./Nav.module.css";
import { useAppSelector } from "../../../app/hooks/hooks"

type Props = {
  position: string,
}

const Nav = (props:Props) => {
  const {position} = props;
  const menu = useAppSelector((state) => state.form.menu);
  const menuFooter = useAppSelector((state) => state.form.menuFooter);

  return (
    <nav className={styles.nav}>
      <ul className={(position!=="footer")?styles.list:styles.list_footer}>
      {
      (position!=="footer")?
      menu.map((el) => (
          <li className={styles.item} key={el.name}>
            <Link href={`#${el.href}`}>
              <p className={styles.p1}>{el.name}</p>
            </Link>
          </li>
        )):
        menuFooter.map((el) => (
          <li className={styles.item_footer} key={el.name}>
            <Link href={`#${el.href}`}>
              <p className={styles.p1}>{el.name}</p>
            </Link>
          </li>
        ))
      }
      </ul>
    </nav>
  );
};

export default Nav;
