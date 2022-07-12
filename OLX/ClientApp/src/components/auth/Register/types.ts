export enum RegisterActionTypes {
  REGISTER_START = "REGISTER_START",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
}

export interface RegisterState {
	data: string,
	isRegisterd:boolean,
}

export interface RegisterStartAction {
  type: RegisterActionTypes.REGISTER_START;
}

export interface RegisterSuccessAction {
  type: RegisterActionTypes.REGISTER_SUCCESS;
  payload: string;
}

export type RegisterAction =
  | RegisterStartAction
  | RegisterSuccessAction
;



export interface IRegister {
  email?: string;
  password?: string;
  // confirmPassword?: string;
}

export interface IRequest extends IRegister {
  RecaptchaToken: string;
}

export interface RegisterError {
  password: string,
  email: string
};

export interface RegisterErrors {
  errors: RegisterError,
  status: number
};