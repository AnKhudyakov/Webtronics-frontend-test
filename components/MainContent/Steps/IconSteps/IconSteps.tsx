import styles from "./IconSteps.module.css";
import type { Steps } from "../../../types/types";

const IconSteps = (props: Steps) => {
  const { name, title, desc } = props;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}></div>
      <div className={styles.filter}></div>
      <div className={styles.title_desc}>
        <h4>{name}</h4>

        <h3>{title}</h3>

        <p className={styles.p1}>{desc}</p>
      </div>
    </div>
  );
};

export default IconSteps;
