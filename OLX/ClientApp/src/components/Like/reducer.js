import { CART_ALL } from "./types";

const initialState = {
    likeList: []
}

export const cartReducer = (state=initialState, action) => {
    const {type, payload}=action;
    switch(type) {
        case CART_ALL: {
            return {
                ...state,
                likeList: payload
            };
        }
        
        default: {
            return state;
        }
    }
} 
