import { addBook } from "../actions";

export const postBook = (bookInfo) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookInfo),
    });
    const data = await response.json();
    
    dispatch(addBook(data));
  };
};
