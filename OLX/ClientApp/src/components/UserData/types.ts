import { IProfile } from './Profile/types';
import { BasketItem } from './UserOrders/types';

export interface ProfileState {
  profile: IProfile;
  userList: any
  basket: any
  cost: number
  loading: boolean;
  error: undefined | string;
}

export const GET_ADV_BY_USER = "GET_ADV_BY_USER";
export const BASKET_ALL = "BASKET_ALL";
export const BASKET_ADD = "BASKET_ADD";

