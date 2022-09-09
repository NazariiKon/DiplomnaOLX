export enum ProfileActionTypes {
  PROFILE = "PROFILE",
  PROFILE_SUCCESS = "PROFILE_SUCCESS",
  PROFILE_ERROR = "PROFILE_ERROR",
  GET_ADV_BY_USER = "GET_ADV_BY_USER",
  BASKET_ALL = "BASKET_ALL",
  BASKET_ADD = "BASKET_ADD",
  GET_CITIES = "GET_CITIES"
}

export interface IProfile {
  id: number | null;
  email: string;
  photo: string;
}


export interface ProfileAction {
  type: ProfileActionTypes.PROFILE;
}

export interface LoginAuthSuccessAction {
  type: ProfileActionTypes.PROFILE_SUCCESS;
  payload: IProfile;
}

export interface LoginAuthErrorAction {
  type: ProfileActionTypes.PROFILE_ERROR;
  payload: string;
}

export interface GetAdvByUser {
  type: ProfileActionTypes.GET_ADV_BY_USER;
  payload: any;
}

export interface GetBasket {
  type: ProfileActionTypes.BASKET_ALL;
  payload: any;
}

export type ProfileActions =
  | ProfileAction
  | LoginAuthSuccessAction
  | LoginAuthErrorAction
  | GetAdvByUser
  | GetBasket
