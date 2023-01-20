import Image from "next/image";
import styles from "./IconReview.module.css";
import man1 from "../../../../components/assets/man1.png";
import man2 from "../../../../components/assets/man2.png";
import woman1 from "../../../../components/assets/woman1.png";

type Props = {
  src: string;
};

const IconReview = (props: Props) => {
  const { src } = props;
  let icon;
  if (src == "man1") {
    icon = man1;
  } else if (src == "man2") {
    icon = man2;
  } else {
    icon = woman1;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}></div>
      <Image src={icon} alt="Photo" className={styles.img} 
      layout="fill"
      //width="390"
      //height="420"
       />
      <div className={styles.filter}></div>
    </div>
  );
};

export default IconReview;
