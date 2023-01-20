import Image from "next/image";
import styles from "./Arrow.module.css";
import arrow from "../../../../components/assets/arrow_slide.png";

const Arrow = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}></div>
      <div className={styles.filter}></div>
      <Image src={arrow} alt="Photo" className={styles.img} />
     
    </div>
  );
};

export default Arrow;
