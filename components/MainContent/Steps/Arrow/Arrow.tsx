import Image from "next/image";
import styles from "./Arrow.module.css";
import arrow from "../../../../components/assets/arrow.png";

const Arrow = () => {

  return (
    <div className={styles.container}>
      <Image src={arrow} alt="Line"  className={styles.arrow}/>
      <div className={styles.arrow}></div>
      <div className={styles.circle}></div>
    </div>
  );
};

export default Arrow;
