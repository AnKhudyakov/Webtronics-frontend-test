import styles from "./Home.module.css";
import Button from "../../Button/Button";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}></div>
      <div className={styles.gradient}></div>
      <div className={styles.container}>
        <h1 className={styles.title_first}>Front-End</h1>
        <h1 className={styles.title_second}>Developer</h1>
        <p className={styles.title_desc}>
          Make UIs and websites beautiful, functional, and fast. Cover all the
          topics that expensive bootcamps teach (and more).{" "}
        </p>
        <h3 className={styles.title_courses}>Courses</h3>
        <div className={styles.btn}>
          <Button name={"Start my career change"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
