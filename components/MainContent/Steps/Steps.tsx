import styles from "./Steps.module.css";
import IconSteps from "./IconSteps/IconSteps";
import Arrow from "./Arrow/Arrow";
import Image from "next/image";
import { useAppSelector } from "../../../app/hooks/hooks";
import frame from "../../../components/assets/frame.png";

const Steps = () => {
  const stepsLeft = useAppSelector((state) => state.form.stepsLeft);
  const stepsRight = useAppSelector((state) => state.form.stepsRight);
  return (
    <div className={styles.container}>
      <h2 className={styles.title_first}>Steps</h2>
      <div className={styles.steps}>
        {/* <Image src={line} alt="Line" /> */}
        <div className={styles.steps_left}>
          {stepsLeft.map((step) => (
            <div className={styles.step} key={step.name}>
              <IconSteps
                desc={step.desc}
                title={step.title}
                name={step.name}
              ></IconSteps>
              <div className={styles.img_left}>
                <Image src={frame} alt="Frame" />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.lines}>
          <div className={styles.line}></div>
          <div className={styles.arrows_left}>
            <Arrow></Arrow>
            <Arrow></Arrow>
            <Arrow></Arrow>
          </div>
          <div className={styles.arrows_right}>
            <Arrow></Arrow>
            <Arrow></Arrow>
            <Arrow></Arrow>
          </div>
        </div>

        <div className={styles.steps_right}>
          {stepsRight.map((step) => (
            <div className={styles.step} key={step.name}>
              <IconSteps
                desc={step.desc}
                title={step.title}
                name={step.name}
              ></IconSteps>
              <div className={styles.img_right}>
                <Image src={frame} alt="Frame" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
