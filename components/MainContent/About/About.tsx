import styles from "./About.module.css";
import Icon from "./Icon/Icon";
import line from "../../../components/assets/line.png";
import Image from "next/image";
import { useAppSelector } from "../../../app/hooks/hooks";

const About = () => {
  const mentors = useAppSelector((state) => state.form.mentors);
  return (
    <div className={styles.container}>
      <h2 className={styles.title_first}>About Us</h2>
      <div className={styles.mentors}>
        <h3 className={styles.title_second}>Mentors</h3>
        <Image src={line} alt="Line" />
        <div className={styles.icons}>
          <Icon
            desc={mentors[0].desc}
            iconName={mentors[0].icon}
            name={mentors[0].name}
          ></Icon>
          <div className={styles.icon2}>
            <Icon
              desc={mentors[1].desc}
              iconName={mentors[1].icon}
              name={mentors[1].name}
            ></Icon>
          </div>
          <Icon
            desc={mentors[2].desc}
            iconName={mentors[2].icon}
            name={mentors[2].name}
          ></Icon>
        </div>
      </div>
      <p className={styles.title_desc}>
        Front-end engineers work closely with designers to make websites
        beautiful, functional, and fast. This Career Path will teach you not
        only the necessary languages and technologies, but how to think like a
        front-end engineer, too.
      </p>
    </div>
  );
};

export default About;
