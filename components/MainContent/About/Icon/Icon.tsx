import Image from "next/image";
import styles from "./Icon.module.css";
import icon1 from "../../../../components/assets/WadeWarren.png";
import icon2 from "../../../../components/assets/KristinWatson.png";
import icon3 from "../../../../components/assets/RobertFox.png";

type Props = {
  desc: string;
  iconName: string;
  name: string;
}

const Icon = (props: Props) => {
  const { desc, iconName, name } = props;
  let icon;
  if (iconName == "WadeWarren") {
    icon = icon1;
  } else if (iconName == "KristinWatson") {
    icon = icon2;
  } else {
    icon = icon3;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.circle}>
          <Image src={icon} alt="Mentor" className={styles.img} />
          <div className={styles.filter}></div>
        </div>
        <div className={styles.title_desc}>
          <h4>{name}</h4>
          <p className={styles.p2}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Icon;
