import { ADV_ALL } from "./types";
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
