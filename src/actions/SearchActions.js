import { SET_INDEX,  FETCH_BOOKS, LOADING,RESET_BOOKS, SET_QUERY} from "./types";
import axios from 'axios';

export const fetchBooks =(query,index)=>dispatch=>{
   axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&orderBy=relevance&startIndex=${index}`)
        .then(response => {
                dispatch ({
                    type: FETCH_BOOKS,
                    payload: response.data
                })
                dispatch(
                    {
                        type:SET_INDEX,
                        payload:40
                    }
                )
            }
        )
        .catch(err => console.log(err));
};

export const resetBooks=()=>{
    return(
        {type:RESET_BOOKS}
    )
}
export const resetQuery=(query)=>{
    return(
        {
            type:SET_QUERY,
            payload:query
        }
    )
}



export const setLoading = () => {
    return {
        type: LOADING
    };
};

