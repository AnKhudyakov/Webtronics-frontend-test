import styles from "./Contacts.module.css";
import Input from "./Input/Input";
import Button from "../../Button/Button";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Fetcher } from "../../api/fetcher";
import { setId } from "../../state";
import { useAppSelector, useAppDispatch } from "../../../app/hooks/hooks";
import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import type { NewFeedback } from "../../types/types";

export type MyInputTypes = {
  name: string;
  email: string;
  phone: string;
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object().shape({
  name: yup.string().required("Required name"),
  email: yup.string().required("Required email").email("Email is not valid"),
  phone: yup
    .string()
    .required("Required phone")
    .matches(phoneRegExp, "Phone number is not valid"),
});

const Contacts = () => {
  const fields = useAppSelector((state) => state.form.fields);
  const id = useAppSelector((state) => state.form.id);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<MyInputTypes>({ resolver: yupResolver(validationSchema) });

  const onSubmit: SubmitHandler<FieldValues> = (e) => {
    //GET
    Fetcher.GetFeedback()
      .then((data: Array<NewFeedback>) => {
        dispatch(setId(data.length + 1));
        const newData = {
          id: id,
          email: e.email,
          name: e.name,
          phone: e.phone,
        };
        Fetcher.PostFeedback(newData).then(() => {
          reset({
            name: "",
            phone: "",
            email: "",
          });
          toast.success("Success");
        });
      })
      .catch((err) => {
        toast.error(err.message ? err.message : "Sorry, Please, try again");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}></div>
      <div className={styles.bg}></div>
      <div className={styles.block}>
        <div className={styles.title}>
          <h2 className={styles.title_first}>Contact us</h2>
          <p className={styles.title_desc}>
            Do you have any kind of help please contact with us.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className={
              errors.name || errors.phone || errors.email
                ? styles.inputs_error
                : styles.inputs
            }
          >
            <Input
              name={fields[0].name}
              register={register}
              errors={errors.name}
            ></Input>
            <Input
              name={fields[1].name}
              register={register}
              errors={errors.phone}
            ></Input>
            <Input
              name={fields[2].name}
              register={register}
              errors={errors.email}
            ></Input>
          </div>
          <div className={styles.btn}>
            <Button name={"Send"} />
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </div>
    </div>
  );
};

export default Contacts;
