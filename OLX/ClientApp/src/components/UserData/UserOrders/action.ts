import http from "../../../http_common";
import { Dispatch } from "react";
import { BASKET_ALL } from "../types";

export const BasketAll = () => async (dispatch: any) => {
    try{
        const {data} = await http.get("api/Basket/list");
        dispatch({type: BASKET_ALL, payload: data});
        return Promise.resolve();
    }
    catch(err) {
        Promise.reject(err);
    }
}

export const BasketAdd = (id: number) => async (dispatch: any) => {
    try {
      const responce = await http.post<number>(`api/Basket/add/${id}`);
      return Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };

export const BasketDelete = (id: number) => async (dispatch: any) => {
    try {
      const responce = await http.delete<number>(`api/Basket/delete/${id}`);
      return Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };
