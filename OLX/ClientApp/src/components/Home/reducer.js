import { ADV_ALL, ADV_VIP } from "./types";

const initialState = {
    list: [],
    vipList: []
}

export const advReducer = (state=initialState, action) => {
    const {type, payload}=action;
    switch(type) {
        case ADV_ALL: {
            return {
                ...state,
                list: payload
            };
        }

        case ADV_VIP: {
            return {
                ...state,
                vipList: payload
            };
        }
        
        default: {
            return state;
        }
    }
} 
