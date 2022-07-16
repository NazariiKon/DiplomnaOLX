import { ADV_ALL, ADV_VIP_NEXT, ADV_VIP_BACK} from "./types";
import http from "../../http_common";

export const AdvAll = () => async (dispatch) => {
    try{
        const {data} = await http.get("api/Advertisement/list");
        dispatch({type: ADV_ALL, payload: data});
        return Promise.resolve();
    }
    catch(err) {
        return Promise.reject(err.response.data);
    }
}

export const VipAdv = () => async (dispatch) => {
    try{
        const {data} = await http.get("api/Advertisement/vipList");
        dispatch({type: ADV_VIP_NEXT, payload: data});
        return Promise.resolve();
    }
    catch(err) {
        return Promise.reject(err.response.data);
    }
}

export const VipAdvBack = () => async (dispatch) => {
    try{
        const {data} = await http.get("api/Advertisement/vipListBack");
        dispatch({type: ADV_VIP_BACK, payload: data});
        return Promise.resolve();
    }
    catch(err) {
        return Promise.reject(err.response.data);
    }
}