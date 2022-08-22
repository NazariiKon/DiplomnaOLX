import { CART_ALL } from "./types";
import http from "../../http_common";
import { Dispatch } from "react";

export const CartAll = () => async (dispatch: any) => {
    try{
        const {data} = await http.get("api/Carts/list");
        dispatch({type: CART_ALL, payload: data});
        return Promise.resolve();
    }
    catch(err) {
        Promise.reject(err);
    }
}

export const CartAdd = (id: number) => async (dispatch: any) => {
    try {
      const responce = await http.post<number>(`api/Carts/add/${id}`);
      return Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };

export const CartDelete = (id: number) => async (dispatch: any) => {
    try {
      const responce = await http.delete<number>(`api/Carts/delete/${id}`);
      return Promise.resolve();
    } catch (error) {
      Promise.reject(error);
    }
  };