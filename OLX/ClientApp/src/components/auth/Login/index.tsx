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
import './style.css'

const LoginPage: React.FC = () => {

  const initialValues: ILogin = { email: "", password: "", invalid: "" };
  const [loading, setLoading] = useState<boolean>(false);

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
      const serverErrors = errors as ILoginError;
      const { password, invalid } = serverErrors;
      console.log("passwword", password);
      console.log("invalid", invalid);

      if (password !== undefined) {
        setFieldError("password", password[0]);
      }
      console.log(invalid.length);

      if (invalid !== undefined) {
        setFieldError("invalid", invalid[0]);
      }
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
        <div className="col-6">
          <div className="text-center mt-4 mb-4">
            <h1 className="welcome">Вітаємо вас</h1>
            {/* <button >Увійти з Google</button> */}
          </div>
          <div className="strike mb-4">
              <span className="text">Увійти з email</span>
          </div>
          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit} className="mx-5">
              {errors.invalid !== undefined && (
                <div className="alert alert-danger text-center" role="alert">
                  <ErrorMessage name="invalid" />
                </div>
              )}

              <div className="mx-5 px-5">
              <InputGroup
                field="email"
                type="text"
                error={errors.email}
                touched={touched.email}
                onChange={handleChange}
              />

              <InputGroup
                field="password"
                type="password"
                error={errors.password}
                touched={touched.password}
                onChange={handleChange}
              />
              </div>
              <div className="d-flex justify-content-end px-4 mx-5 mb-4">
                <Link to="/recoverPassword" className="text text-decoration-none">Забули пароль?</Link>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn submit btn-text mb-3"
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
        <div className="col-6">
          <img src={logo}></img>
        </div>
      </div>
      {loading && <EclipseWidget />}
    </>
  );
};
export default LoginPage;
