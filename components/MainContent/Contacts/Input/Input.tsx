import { useEffect, useState } from "react";
import styles from "./Input.module.css";

type Props = {
  name: string;
  register: any;
  errors: any;
};

const Input = (props: Props) => {
  const { name, register, errors } = props;
  const [error, setError] = useState(false);
  const fieldName = name.toLowerCase();
  useEffect(() => {
    if (errors.name && fieldName == "name") {
      setError(true);
    }
    if (errors.phone && fieldName == "phone") {
      setError(true);
    }
    if (errors.email && fieldName == "email") {
      setError(true);
    }
  }, [errors]);

  return (
    <div className={error ? styles.container_error : styles.container}>
      <div className={styles.wrapper}></div>
      <input
        type="text"
        className={error ? styles.input_error : styles.input}
        placeholder={name}
        {...register(`${fieldName}`, {
          required: true,
        })}
      />
      <p className={error ? styles.title_desc_error : styles.title_desc}>
        {fieldName == "name" && errors.name?.message}
        {fieldName == "email" && errors.email?.message}
        {fieldName == "phone" && errors.phone?.message}
      </p>
    </div>
  );
};

export default Input;
