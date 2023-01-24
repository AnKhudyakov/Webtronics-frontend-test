import styles from "./IconSteps.module.css";

type Props = {
  name: string;
  title: string;
  desc: string;
};

const IconSteps = (props: Props) => {
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
