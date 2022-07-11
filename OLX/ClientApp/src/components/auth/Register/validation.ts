import * as yup from "yup"

export const RegisterSchema = yup.object({
  email: yup
    .string()
    .email("Введіть коректний Email")
    .required("Поле не повинне бути пустим"),
  password: yup
    .string()
    .min(6, "Пароль повинен містити мінімум 6 символів")
    .matches(/[0-9a-zA-Z]/, "Пароль може містить латинські символи і цифри")
    .required("Поле не повинне бути пустим")
  // confirmPassword: yup
  //   .string()
  //   .min(6, "Пароль повинен містити мінімум 6 символів")
  //   .oneOf([yup.ref("password"), null], () => "Паролі повинні співпадати")
  //   .required("Поле не повинне бути пустим"),
});
