import Image from "next/image";
import styles from "./IconQuestion.module.css";
import icon from "../../../../components/assets/Plus.png";
import { useState } from "react";
import iconMinus from "../../../../components/assets/minus.png";
import type { Questions } from "../../../types/types";

const IconQuestion = (props: Questions) => {
  const { name, desc } = props;
  const [open, setOpen] = useState(false);

  const handlerOpen = () => {
    setOpen(!open);
  };

  return open ? (
    <div className={styles.container_open} onClick={handlerOpen}>
      <div className={styles.wrapper_open}></div>
      <div className={styles.filter_open}></div>
      <div className={styles.block}></div>
      <h4 className={styles.title_desc}>{name}</h4>
      <p className={styles.p1}>{desc}</p>
      <Image src={iconMinus} alt="icon" className={styles.imgMinus} />
    </div>
  ) : (
    <div className={styles.container} onClick={handlerOpen}>
      <div className={styles.wrapper}></div>
      <div className={styles.filter}></div>
      <div className={styles.block}></div>
      <h4 className={styles.title_desc}>{name}</h4>
      <Image src={icon} alt="icon" className={styles.img} />
    </div>
  );
};

export default IconQuestion;
