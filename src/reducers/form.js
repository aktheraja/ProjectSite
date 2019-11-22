import ADD_FORM from "../actions/types";
const initialState = {
    forms:[]
};

export default function (state=initialState,action){
    switch (action.type) {
        case ADD_FORM:
            return{
                ...state,
                forms:action.payload
            }
        default:
            return state;
    }
}