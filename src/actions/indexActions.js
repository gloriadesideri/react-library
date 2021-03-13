import {SET_INDEX,RESET_INDEX} from "./types";

export const setIndex=(value)=>{
    return({
            type:SET_INDEX,
            payload:value
        }
    )
}
export const resetIndex=()=>{
    return({
        type:RESET_INDEX
    })
}
