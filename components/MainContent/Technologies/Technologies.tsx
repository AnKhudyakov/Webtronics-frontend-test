import styles from "./Technologies.module.css";
import IconTech from "./IconTech/IconTech";
import { useAppSelector } from "../../../app/hooks/hooks";

const Technologies = () => {
  const techs = useAppSelector((state) => state.form.techs);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className={styles.title_first}>Programming technologies</h2>
        <p className={styles.title_desc}>
          By the end, you’ll have the portfolio and interview skills you need to
          start your new career.
        </p>
      </div>
      <div className={styles.icons}>
        {techs.map((tech) => (
          <IconTech name={tech} key={tech}></IconTech>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
