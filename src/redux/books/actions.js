import { ADD_BOOK, DELETE_BOOK, EDITE_MODE, FETCH_BOOKS, UPDATE_BOOK } from "./actionsType"

export const fetchBook = (bookInfo)=>{
    return {
        type:FETCH_BOOKS,
        payload: bookInfo
    }
}

// add book
export const addBook = (bookInfo)=>{
    return {
        type: ADD_BOOK,
        payload: bookInfo
    }
}
// update book
export const update = (bookInfo)=>{
    return {
        type: UPDATE_BOOK,
        payload: bookInfo
    }
}
// delete book
export const deleteBook = (id)=>{
    return {
        type: DELETE_BOOK,
        payload: id
    }
}

// Enable edit mode
export const enableEditMode = (bookId) => ({
  type: EDITE_MODE,
  payload: { editeMode: true, bookId }
});

// Reset edit mode
export const resetEditMode = () => ({
  type: EDITE_MODE,
  payload: { editeMode: false, bookId: null }
});