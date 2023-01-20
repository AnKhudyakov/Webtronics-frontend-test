import styles from "./Review.module.css";
import IconReview from "./IconReview/IconReview";
import Arrow from "./Arrow/Arrow";
import Image from "next/image";
import { useAppSelector } from "../../../app/hooks/hooks";
import { useState } from "react";

const Review = () => {
  const [src1, setSrc1] = useState("man1");
  const [src2, setSrc2] = useState("woman");
  const [src3, setSrc3] = useState("man2");
  const [page, setPage] = useState("1");

  const SwitchR = () => {
    switch (src1) {
      case "man1":
        setSrc1("woman");
        setSrc2("man2");
        setSrc3("man1");
        setPage("2");
        break;
      case "woman":
        setSrc1("man2");
        setSrc2("man1");
        setSrc3("woman");
        setPage("3");
        break;
      case "man2":
        setSrc1("man1");
        setSrc2("woman");
        setSrc3("man2");
        setPage("1");
        break;
    }
  };

  const SwitchL = () => {
    switch (src1) {
      case "man1":
        setSrc1("man2");
        setSrc2("man1");
        setSrc3("woman");
        setPage("3");
        break;
      case "woman":
        setSrc1("man1");
        setSrc2("woman");
        setSrc3("man2");
        setPage("2");
        break;
      case "man2":
        setSrc1("woman");
        setSrc2("man2");
        setSrc3("man1");
        setPage("1");
        break;
    }
  };

  const handlerClickR = () => {
    SwitchR();
  };

  const handlerClickL = () => {
    SwitchL();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title_first}>Review</h2>
      <div className={styles.column}>
        <div className={styles.column_left}>
          <h4 className={styles.title_second}>Best courses ever</h4>
          <p className={styles.title_desc}>
            Front-end engineers work closely with designers to make websites
            beautiful, functional, and fast. This Career Path will teach you not
            only the necessary languages and technologies, but how to think like
            a front-end engineer, too.
          </p>
        </div>
        <div className={styles.slider}>
          <div className={styles.counter}>
            <div className={styles.counter}>
              <div></div>
              <h4 className={styles.count}>{page}/</h4>
              <p className={styles.p1}>3</p>
            </div>
            <div className={styles.arrows}>
              <div className={styles.arrow_left} onClick={handlerClickL}>
                <Arrow />
              </div>
              <div className={styles.arrow_right} onClick={handlerClickR}>
                <Arrow />
              </div>
            </div>
          </div>
          <div className={styles.icons}>
            <IconReview src={src1}></IconReview>
            <IconReview src={src2}></IconReview>
            <IconReview src={src3}></IconReview>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
