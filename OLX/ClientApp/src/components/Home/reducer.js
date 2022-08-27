import { ADV_ALL, ADV_VIP_NEXT, ADV_VIP_BACK, GET_ADV_BY_CATEGORY, GET_ADV_BY_SUBCATEGORY} from "./types";

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
        case GET_ADV_BY_CATEGORY: {
            return {
                ...state,
                list: payload
            };
        }

        case GET_ADV_BY_SUBCATEGORY: {
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
