import { ADV_ALL, ADV_VIP_NEXT, ADV_VIP_BACK} from "./types";

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

        case ADV_VIP_NEXT: {
            return {
                ...state,
                vipList: payload
            };
        }

        case ADV_VIP_BACK: {
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
