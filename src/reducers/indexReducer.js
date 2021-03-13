import {SET_INDEX,RESET_INDEX} from "../actions/types";

const initialState={
    index:0
}

export default function (state=initialState,action) {
    switch (action.type) {
        case 'SET_INDEX':
            return{
                ...state,
                index:state.index+action.payload
            }
        case 'RESET_INDEX':
            return {
                ...state,
                index:0
            }
        default:return state

    }
}
