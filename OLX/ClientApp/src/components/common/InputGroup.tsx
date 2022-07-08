import { FC, InputHTMLAttributes } from "react";
import classNames from 'classnames';
import './style.css'

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  field: string,
  touched?: boolean | null,
  error?: string | null,
  type?: "text" | "email" | "password" | "file"| "number" | "hidden" | "string"
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}


const InputGroup: FC<InputGroupProps> = ({
  field,
  touched = null,
  error = null,
  type = "text",
  value,
  onChange,
  ...props
}: InputGroupProps) => {
  return (
    <div className="mb-3">
      <input
        type={type}
        name={field}
        className={classNames(
          "form-control", "zxc",
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

