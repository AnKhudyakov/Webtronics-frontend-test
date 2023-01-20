import Image from "next/image";
import styles from "./IconTech.module.css";
import angular from "../../../../components/assets/angular.png";
import react from "../../../../components/assets/react.png";
import vue from "../../../../components/assets/vue.png";
import js from "../../../../components/assets/js.png";

type Props = {
  name: string;
};

const IconTech = (props: Props) => {
  const { name } = props;
  let icon;
  if (name == "Angular") {
    icon = angular;
  } else if (name == "React") {
    icon = react;
  } else if (name == "Vue") {
    icon = vue;
  } else {
    icon = js;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}></div>
      <Image src={icon} alt="Technology" className={styles.img} />
      <div className={styles.filter}></div>
      <div className={styles.title_desc}>
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default IconTech;
