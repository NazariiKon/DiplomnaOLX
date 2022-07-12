import { FC, InputHTMLAttributes } from "react";
import classNames from 'classnames';
import './style.css'

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string,
  field: string,
  touched?: boolean | null,
  error?: string | null,
  type?: "text" | "email" | "password" | "file"| "number" | "hidden" | "string"
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}


const InputGroup: FC<InputGroupProps> = ({
  placeholder,
  field,
  touched = null,
  error = null,
  type = "text",
  value,
  onChange,
  ...props
}: InputGroupProps) => {
  return (
    <div className="mb-3 col-lg-6 col-md-8 col-sm-10 col-xs-6 m-d offset-md-2 offset-sm-1 offset-lg-3">
      <input
        placeholder={placeholder}
        type={type}
        name={field}
        className={classNames(
          "form-control",
          { "is-invalid": touched && error },
          { "is-valid": touched && !error }
        )}
        id={field}
        onChange={onChange}
        value={value}
        {...props}
      />
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default InputGroup;

