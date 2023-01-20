import styles from "./Button.module.css";

type Props = {
  name: string;
}

const Button = (props: Props) => {
  return <button className={styles.btn}>{props.name}</button>;
};

export default Button;
