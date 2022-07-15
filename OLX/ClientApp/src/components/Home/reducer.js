import { ADV_ALL } from "./types";

const initialState = {
    list: []
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
        default: {
            return state;
        }
    }
} 

export default advReducer;