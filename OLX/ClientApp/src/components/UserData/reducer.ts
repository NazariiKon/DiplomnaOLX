import { number } from 'yup';
import { ProfileActions, ProfileActionTypes } from './Profile/types';
import { ProfileState } from './types';
import { GET_ADV_BY_USER, BASKET_ADD, BASKET_ALL} from "./types";

const intialState: ProfileState = {
  basket: [],
  cost: 0,
  userList: [],
  profile: {
    id: null,
    email: '',
    photo: ''
  },
  loading: false,
  error: "",
};

export const profileReducer = (state = intialState, action: ProfileActions) => {
  switch (action.type) {
    case ProfileActionTypes.PROFILE:
      return {
        ...state,
        loading: true,
      };

    case GET_ADV_BY_USER: {
      return {
        ...state,
        userList: action.payload
      };
    }

    case ProfileActionTypes.PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: { ...action.payload },
      };

    case ProfileActionTypes.PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case BASKET_ALL:
      return {
        ...state,
        basket: action.payload
      };
    default:
      return { ...state };
  }
}