import styles from "./Questions.module.css";
import IconQuestion from "./IconQuestion/IconQuestion";
import { useAppSelector } from "../../../app/hooks/hooks";
const Questions = () => {
  const questions = useAppSelector((state) => state.form.questions);

  return (
    <div className={styles.container}>
      <h2 className={styles.title_first}>Frequently Asked Questions</h2>
      <div className={styles.questions}>
        <div className={styles.question_left}>
          <p className={styles.p1}>Do you have any kind of questions?</p>
          <p className={styles.p1}>We are here to help.</p>
          <div className={styles.img}></div>
        </div>
        <div className={styles.question_right}>
          {questions.map((question) => (
            <IconQuestion
              key={question.id}
              desc={question.desc}
              name={question.name}
            ></IconQuestion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
