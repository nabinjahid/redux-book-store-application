import { update } from "../actions";


export const updateBook = (id, bookInfo) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookInfo),
    });
    const data = await response.json();
    
    dispatch(update(data));
  };
};