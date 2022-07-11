import { useState } from "react";
import InputGroup from "../../common/InputGroup";
import { useActions } from "../../../hooks/useActions";
import { useNavigate } from "react-router";
import { RegisterSchema } from "./validation";
import { IRegister, RegisterError } from "./types";
import EclipseWidget from "../../common/eclipse";
import { ErrorMessage, Form, FormikHelpers, FormikProvider, useFormik } from "formik";
import { Helmet } from "react-helmet";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import CropperComponent from "../../containers/CropperComponent/CropperComponent";
import "../Register/register.css"
import logo from '../../../images/img_logo.png'
import google_auth from '../../../images/google_auth.png'

const RegisterPage = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [bot, setBot] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);
  const { RegisterUser } = useActions();
  const navigator = useNavigate();
  const [password, setInvalid] = useState<string>("");
  const initialValues: IRegister = {
    email: "",
    password: ""
  };

  const onHandleSubmit = async (
    values: IRegister,
    { setFieldError }: FormikHelpers<IRegister>
  ) => {

    setLoading(true);
    try {
      if (!executeRecaptcha) {
        setBot(true);
        return;
      }
      const recapchaToken = await executeRecaptcha();
      console.log("val", values)
      await RegisterUser({ ...values, RecaptchaToken: recapchaToken });
      await navigator("/");

      setLoading(false);
    } catch (err) {
      setLoading(false);
      const serverErrors = err as RegisterError;
      const { password } = serverErrors;
      setInvalid(password);
      // Object.entries(serverErrors).map(([key, value]) =>
      //   setFieldError(key, value.toString())
      // );
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: RegisterSchema,
    onSubmit: onHandleSubmit,
  });

  const { errors, touched, handleChange, handleSubmit, setFieldValue } = formik;

  return (
    <>
      <Helmet>
        <title>Реєстрація</title>
      </Helmet>
      <div className="row">
        <div className="col-6">
          <div className="text-center mt-4 mb-4">
            <h1 className="welcome">Реєстрація</h1>
          </div>
          <div className="text-center mb-4 ">
            <a href="!#"><img className="col-12 col-lg-8 col-md-10 col-sm-12 col-xl-7" src={google_auth}></img></a>
          </div>
          <div className="strike mb-4">
            <span className="text">Зареєструватись з email</span>
          </div>
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit}>
              {password && (
                <div className="alert alert-danger text-center" role="alert">
                  {password}
                </div>
              )}
              <InputGroup
                placeholder="Ваш Email"
                field="email"
                type="text"
                error={errors.email}
                touched={touched.email}
                onChange={handleChange}
              />

              <InputGroup
                placeholder="Ваш пароль"
                field="password"
                type="password"
                error={errors.password}
                touched={touched.password}
                onChange={handleChange}
              />

              {/* <InputGroup
                  placeholder="Підтвердіть пароль"
                  field="confirmPassword"
                  type="password"
                  error={errors.confirmPassword}
                  touched={touched.confirmPassword}
                  onChange={handleChange}
                /> */}

              <div className="text-center">
                <button
                  type="submit"
                  className="btn submit btn-text mb-4"
                  disabled={loading}
                >
                  Зареєструватись
                </button>
              </div>
            </Form>
          </FormikProvider>
        </div>
        <div className="col-6 align-self-center">
          <img className="col-12 col-lg-10 col-md-12 col-sm-12 col-xl-10" src={logo}></img>
        </div>
      </div>
      {loading && <EclipseWidget />}
    </>
  );
};
export default RegisterPage;
