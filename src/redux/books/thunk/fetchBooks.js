import { fetchBook } from "../actions"

export const fetchBooks =async (dispatch)=>{
    const response = await fetch("http://localhost:9000/books")
    const data = await response.json()
    ;
    
    dispatch(fetchBook(data))
}