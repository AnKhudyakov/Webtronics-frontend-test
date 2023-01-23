import styles from "./Input.module.css";
import { UseFormRegister, FieldValues } from "react-hook-form";

type Props = {
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: any;
};

const Input = (props: Props) => {
  const { name, register, errors } = props;
  const fieldName = name.toLowerCase();

  return (
    <div className={errors ? styles.container_error : styles.container}>
      <div className={styles.wrapper}></div>
      <input
        type="text"
        className={errors ? styles.input_error : styles.input}
        placeholder={name}
        {...register(`${fieldName}`, {
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
