import { CATEGORIES_ALL, SUBCATEGORIES} from "./types";

const initialState = {
    categories: [],
    subcategories: []
}

export const categoryReducer = (state=initialState, action) => {
    const {type, payload}=action;
    switch(type) {
        case CATEGORIES_ALL: {
            return {
                ...state,
                categories: payload
            };
        }
        case SUBCATEGORIES: {
            return {
                ...state,
                subcategories: payload
            };
        }
        
        default: {
            return state;
        }
    }
} 
