import styles from "./Gallery.module.css";
import Image from "next/image";
import developer1 from "../../../components/assets/developer1.png";
import developer2 from "../../../components/assets/developer2.png";
import developer3 from "../../../components/assets/developer3.png";
import developer4 from "../../../components/assets/developer4.png";

const Gallery = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title_first}>Gallery</h2>
      <div className={styles.column}>
        <div className={styles.column_left}>
          <p className={styles.title_desc}>
            By the end of this course, you will be able to develop and publish
            your very own Google Chrome extension! In this course we will focus
            on coding exercises and projects.
          </p>
          <Image src={developer4} alt="Men" className={styles.img4} />
        </div>
        <div className={styles.slider}>
          <div className={styles.pictures}>
          <Image src={developer1} alt="Men" className={styles.img1} />
          <Image src={developer2} alt="Men" className={styles.img2} />
          <Image src={developer3} alt="Men" className={styles.img3} />
          </div>    
          <p className={styles.p1}>
            If you would like to learn web development and get a job in the tech
            industry, you are going to LOVE this course! Learn HTML, CSS,
            JavaScript, Bootstrap and more with over 15 hours of HD video
            tutorials! This course was designed to be extremely beginner
            friendly. We will begin with the very basics of HTML and build a
            simple web page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
