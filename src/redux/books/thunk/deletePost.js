import { deleteBook } from "../actions";


export const deletBook = (id) => {
  return async (dispatch) => {
     await fetch(`http://localhost:9000/books/${id}`, {
      method: "DELETE",
    });
    dispatch(deleteBook(id));
  };
};
