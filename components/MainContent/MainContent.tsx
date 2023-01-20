import styles from "./MainContent.module.css";
import Home from "./Home/Home";
import About from "./About/About";
import Technologies from "./Technologies/Technologies";
import Contacts from "./Contacts/Contacts";
import Steps from "./Steps/Steps";
import Questions from "./Questions/Questions";
import Review from "./Review/Review";
import Gallery from "./Gallery/Gallery";

const MainContent = () => {
  return (
    <main className={styles.main}>
      
      <section id="home" className={styles.home}>
        <Home />
      </section> 
      <section id="about" className={styles.about}>
        <About />
      </section>
      <section id="programs" className={styles.tech}>
        <Technologies />
      </section>
       <section id="steps" className={styles.steps}>
        <Steps />
      </section>
      <div className={styles.bgstar}></div>
      <section id="questions" className={styles.questions}>
        <Questions />
  </section>
      <section id="review" className={styles.review}>
        <Review />
      </section>
      <section id="gallery" className={styles.gallery}>
        <Gallery />
      </section>
      <section id="getInTouch" className={styles.contacts}>
        <Contacts />
      </section>
    </main>
  );
};

export default MainContent;
