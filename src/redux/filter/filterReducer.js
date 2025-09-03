import { ALL, FETURED, FILTER, SEARCH } from "./actionsTypes";

const initialState = {
  filter: "All",
  search: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      switch (action.payload) {
        case FETURED:
          return {
            ...state,
            filter: "Featured",
          };
        case ALL:
          return {
            ...state,
            filter: "All",
          };

        default:
          return state;
      }

    case SEARCH:
        return {
            ...state,
            search : action.payload
        } 

    default:
      return state;
  }
};

export default filterReducer;
