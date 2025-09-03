import { ADD_BOOK, DELETE_BOOK, EDITE_MODE, FETCH_BOOKS, UPDATE_BOOK } from "./actionsType";

const initialState = {
  books: [],
  update: {
    editeMode: false,
    bookId: null,
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case EDITE_MODE:
      return {
        ...state,
        update: {
          editeMode: action.payload.editeMode ? true : false,
          bookId: action.payload.bookId || null,
        },
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books , action.payload]
      };
    case UPDATE_BOOK:{
      return {
        ...state,
        books: state.books.map(book => {
            if (book.id === action.payload.id) {
                return action.payload
            }
            return book
        })
      };
    }
    case DELETE_BOOK:{
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      };
    }

    default:
      return state;
  }
};

export default reducer;
