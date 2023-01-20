import styles from "./Contacts.module.css";
import Input from "./Input/Input";
import Button from "../../Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { Fetcher } from "../../api/fetcher";
import { setId } from "../../state";
import { useAppSelector, useAppDispatch } from "../../../app/hooks/hooks";
import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  email: string;
  name: string;
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
    .matches(phoneRegExp, "Phone number is not valid")
    .min(6),
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
  } = useForm<Inputs>({ resolver: yupResolver(validationSchema) });

  // useEffect(() => {
  //   if (errors.name) {
  //     dispatch(setErrorName());
  //   }
  //   if (errors.phone) {
  //     dispatch(setErrorPhone());
  //   }
  //   if (errors.email) {
  //     dispatch(setErrorEmail());
  //   }
  // }, [errors]);

  const onSubmit: SubmitHandler<Inputs> = (e) => {
    //GET
    Fetcher.GetFeedback()
      .then((data: any) => {
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
        console.log(err);
        toast.error(
          err.message
            ? err.message
            : "Sorry, Please, try again"
        );
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
            {fields.map((field) => (
              <Input
                name={field.name}
                key={field.name}
                register={register}
                errors={errors}
              ></Input>
            ))}
          </div>
          <div className={styles.btn}>
            <Button //type="submit"
              name={"Send"}
            />
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
