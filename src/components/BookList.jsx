import { useDispatch, useSelector } from "react-redux";
import BookCard from "./BookCard";
import { useEffect } from "react";
import { fetchBooks } from "../redux/books/thunk/fetchBooks";
import { filter } from "../redux/filter/actions";

const BookList = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.bookReducer.books)
    const filtersBooks = useSelector(state => state.filter.filter)
    const searchValue = useSelector((state) => state.filter.search)
    
    const handleAllButton = ()=>{
       dispatch(filter("All"))
    }
    const handleFeaturedButton = ()=>{
      dispatch(filter("Featured"))
    }
    
    useEffect(()=>{
      dispatch(fetchBooks)
    },[dispatch])
    
    return (
         <div className="order-2 xl:-order-1">
            <div className="flex items-center justify-between mb-12">
              <h4 className="mt-2 text-xl font-bold">Book List</h4>

              <div className="flex items-center space-x-4">
                <button onClick={handleAllButton} className={`filter-btn ${filtersBooks=== "All" ?"active-filter":'' }`} id="lws-filterAll">
                  All
                </button>
                <button onClick={handleFeaturedButton} className={`filter-btn ${filtersBooks === "Featured"?"active-filter": '' }`} id="lws-filterFeatured">
                  Featured
                </button>
              </div>
            </div>
            <div className="lws-bookContainer">
              {/* <!-- Card 1 --> */}
              {
                books
                .filter(book => {
                  return book.name.toLowerCase().includes(searchValue.toLowerCase())
                })
                .filter(book=> {
                  if (filtersBooks === "Featured") {
                    return book.featured
                  }
                  return book
                })
                .map(book=><BookCard key={book.id} book={book}></BookCard>)
              }
             
            </div>
          </div>
    );
};

export default BookList;