import { FETCH_BOOKS, RESET_BOOKS, SET_QUERY,LOADING} from "../actions/types";

const initialState={
    query:'',
    books:[],
    loading:false,

}
export default function (state=initialState,action) {
    switch (action.type) {


        case 'FETCH_BOOKS':

            return {
                ...state,
                books:state.books.concat(action.payload),
                loading: false

            }
        case 'RESET_BOOKS':
            return {
            ...state,
                books:[],
                loading:false
        }
        case 'SET_QUERY':
                return {
                    ...state,
                    query:action.payload,
                    loading: false

        }
        case 'LOADING':{
            return {
                ...state,
                loading: true
            }
        }
        default:
            return state

    }
}
