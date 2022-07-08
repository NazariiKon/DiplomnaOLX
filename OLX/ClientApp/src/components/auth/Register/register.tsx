import { useState } from "react";
import InputGroup from "../../common/InputGroup";
import { useActions } from "../../../hooks/useActions";
import { useNavigate } from "react-router";
import { RegisterSchema } from "./validation";
import { IRegister, RegisterError } from "./types";
import EclipseWidget from "../../common/eclipse";
import { Form, FormikHelpers, FormikProvider, useFormik } from "formik";
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
  // const { RegisterUser } = useActions();
  const navigator = useNavigate();
  const initialValues: IRegister = {
    firstName: "name",
    secondName: "sec",
    email: "",
    photo: "sec",
    phone: "123123123123",
    password: "",
    confirmPassword: "Zxczxc",
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
      
      // await RegisterUser({ ...values, RecaptchaToken: recapchaToken });
      await navigator("/");

      setLoading(false);
    } catch (err) {
      setLoading(false);
      const serverErrors = err as RegisterError;
      console.log(serverErrors);
      Object.entries(serverErrors).map(([key, value]) =>
        setFieldError(key, value.toString())
      );
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: RegisterSchema,
    onSubmit: onHandleSubmit,
  });

  const { errors, touched, handleChange, handleSubmit, setFieldValue } = formik;

  return (
    <div className="row d-flex flex-row justify-content-center">
      <Helmet>
        <title>Реєстрація</title>
      </Helmet>
      <div className="row">
        <div className="col-6">
          <div className="text-center mt-4 mb-4">
            <h1 className="welcome">Реєстрація</h1>
          </div>
          <div className="text-center mb-4">
            <a href="!#"><img src={google_auth}></img></a>
          </div>
          <div className="strike mb-4">
            <span className="text">Зареєструватись з email</span>
          </div>
          <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit} className="mx-5">
              <div className="mx-5 px-5">
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
              </div>

              <div className="custom-control custom-checkbox mx-5 px-5 mb-4">
                    <input type="checkbox" className="custom-control-input mx-2"></input>
                    <label className="custom-control-label check"> * Я погоджуюсь із правилами користування</label>
                    <label className="mx-4 check">сервісом, а також з передачею та обробкою моїх даних в all in.ua. Я підтверджую своє повноліття та відповідальність за розміщення оголошення.</label>
                </div>
                
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
        <div className="col-6">
          <img src={logo}></img>
        </div>
      </div>
      {loading && <EclipseWidget />}
    </div>
  );
};
export default RegisterPage;
