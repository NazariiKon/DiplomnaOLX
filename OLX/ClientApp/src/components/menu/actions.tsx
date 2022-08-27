import { CATEGORIES_ALL, SUBCATEGORIES} from "./types";
import http from "../../http_common";
import { Dispatch } from "react";

export const CategoriesAll = () => async (dispatch: any) => {
    try{
        const {data} = await http.get("api/Categories/list");
        dispatch({type: CATEGORIES_ALL, payload: data});
        return Promise.resolve();
    }
    catch(err) {
        Promise.reject(err);
    }
}

export const Subcategories = (id: number) => async (dispatch: any) => {
    try {
        const {data} = await http.get(`api/Categories/getSubcategories/${id}`);
        dispatch({type: SUBCATEGORIES, payload: data});
      return Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
};