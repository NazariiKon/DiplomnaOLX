import { useState } from "react";
import InputGroup from "../../common/InputGroup";
import { useNavigate } from "react-router";
import { useActions } from "../../../hooks/useActions";
import { LoginSchema } from "./validation";
import { ILogin, ILoginError } from "./types";
import EclipseWidget from "../../common/eclipse";
import { useFormik, Form, FormikProvider, FormikHelpers, ErrorMessage } from "formik";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import logo from '../../../images/img_logo.png'
import google_auth from '../../../images/google_auth.png'
import './style.css'

const LoginPage: React.FC = () => {

  const initialValues: ILogin = { email: "", password: "", invalid: "" };
  const [loading, setLoading] = useState<boolean>(false);
  const [invalid, setInvalid] = useState<string>("");
  const { LoginUser } = useActions();
  const navigator = useNavigate();

  const onHandleSubmit = async (
    values: ILogin,
    { setFieldError }: FormikHelpers<ILogin>
  ) => {
    try {
      setLoading(true);
      await LoginUser(values);
      await navigator("/");
      setLoading(false);
    } catch (errors) {
      setLoading(false);
      console.log("error", errors);
      const serverErrors = errors as ILoginError;
      const { invalid } = serverErrors;
      setInvalid(invalid);
  
      // console.log("err", errors);
      // console.log("invalid", invalid);
    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: onHandleSubmit,
  });
  const { errors, touched, handleChange, handleSubmit } = formik;
  return (
    <>
      <Helmet>
        <title>Вхід</title>
      </Helmet>
      <div className="row">
        <div className="col-5">
          <div className="text-center mt-4 mb-4">
            <h1 className="welcome">Вітаємо вас</h1>
          </div>
          <div className="text-center mb-4 ">
            <a href="!#"><img className="col-12 col-lg-8 col-md-10 col-sm-12 col-xl-7" src={google_auth}></img></a>
          </div>
          <div className="strike mb-4">
            <span className="text">Увійти з email</span>
          </div>
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit}>
              {invalid && (
                <div className="alert alert-danger text-center" role="alert">
                  {invalid}
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
              <div className="d-flex justify-content-end px-4 mx-5 mb-5">
                <Link to="/recoverPassword" className="text text-decoration-none">Забули пароль?</Link>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn submit btn-text mb-4"
                  disabled={loading}
                >
                  Увійти
                </button>
                <div className="d-flex justify-content-center px-4 mx-5 mb-4">
                  <label className="text mx-1"> Немає акаунта?</label> <Link to="/register" className="text-1 text-decoration-none">Зареєструйтесь</Link>
                </div>
              </div>
            </Form>
          </FormikProvider>
        </div>
        <div className="col-7 align-self-center">
          <img className="col-12 col-lg-10 col-md-12 col-sm-12 col-xl-10" src={logo}></img>
        </div>
      </div>
      {loading && <EclipseWidget />}
    </>
  );
};
export default LoginPage;
