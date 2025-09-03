import { FILTER, SEARCH } from "./actionsTypes"

export const filter = (filtOption)=>{
    return {
        type: FILTER,
        payload: filtOption
    }
}
export const search = (text)=>{
    return {
        type: SEARCH,
        payload: text
    }
}