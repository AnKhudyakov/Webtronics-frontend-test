import styles from "./Input.module.css";
import { UseFormRegister, FieldValues, FieldError } from "react-hook-form";
import type { MyInputTypes } from "../Contacts";

type Props = {
  name: "name" | "email" | "phone";
  register: UseFormRegister<MyInputTypes>;
  errors: FieldError | undefined;
};

const Input = (props: Props) => {
  const { name, register, errors } = props;
  const fieldName = name.toLowerCase();
  const plh = name.toUpperCase();
  return (
    <div className={errors ? styles.container_error : styles.container}>
      <div className={styles.wrapper}></div>
      <input
        type="text"
        className={errors ? styles.input_error : styles.input}
        placeholder={plh}
        {...register(name, {
          required: true,
        })}
      />
      <p className={errors ? styles.title_desc_error : styles.title_desc}>
        {fieldName == "name" && errors?.message}
        {fieldName == "email" && errors?.message}
        {fieldName == "phone" && errors?.message}
      </p>
    </div>
  );
};

export default Input;
