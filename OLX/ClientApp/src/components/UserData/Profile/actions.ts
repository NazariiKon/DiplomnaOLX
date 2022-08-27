import { ProfileActions, ProfileActionTypes, IProfile } from './types';

import { Dispatch } from 'react';
import http from '../../../http_common';


const GetProfileData = () => async (dispatch: Dispatch<ProfileActions>) => {
	try {
		dispatch({ type: ProfileActionTypes.PROFILE });
		const response = await http.get<IProfile>("api/Account/profile");
		const data: IProfile = response.data;
		dispatch({
			type: ProfileActionTypes.PROFILE_SUCCESS,
			payload: { ...data }
		})
	} catch (error: any) {
		dispatch({
			type: ProfileActionTypes.PROFILE_ERROR,
			payload: error
		});
	}
};

export const GetAdvByUser = () => async (dispatch: Dispatch<ProfileActions>) => {
	try {
		const { data } = await http.get("api/Advertisement/getAdvByUser");
		dispatch({ type: ProfileActionTypes.GET_ADV_BY_USER, payload: data });
		return Promise.resolve();
	}
	catch (err) {
		return Promise.reject();
	}
}

export default GetProfileData;