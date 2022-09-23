import { IProfile } from './Profile/types';
import { Order } from './UserOrders/types';

export interface ProfileState {
  profile: IProfile;
  userList: any
  orders: Array<Order>
  loading: boolean;
  error: undefined | string;
}

export const GET_ADV_BY_USER = "GET_ADV_BY_USER";
