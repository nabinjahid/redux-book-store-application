import { useDispatch } from "react-redux";
import { enableEditMode } from "../redux/books/actions";
import { deletBook } from "../redux/books/thunk/deletePost";

const BookCard = ({ book }) => {
  const { author, featured, id, name, price, rating , thumbnail } = book;
  const dispatch = useDispatch();
  const handleEditeMode = (id) => {
    dispatch(enableEditMode(id));
  };


  const handleDelete = (id)=>{
    dispatch(deletBook(id))
  }

  return (
    <div className="book-card">
      <img
        className="h-[240px] w-[170px] object-cover lws-bookThumbnail"
        src={thumbnail}
        alt="book"
      />
      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="badge-success lws-Badge">
            {featured && "Featured"}
          </span>
          <div className="text-gray-500 space-x-2">
            <button onClick={() => handleEditeMode(id)} className="lws-edit">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
            <button onClick={()=>handleDelete(id)}  className="modern-btn">
              Dlete
            </button>
          </div>
        </div>

        <div className="space-y-2 mt-4 h-full">
          <h4 className="lws-bookName">{name}</h4>
          <p className="lws-author">{author}</p>
          <div className="lws-stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                viewBox="0 0 20 20"
                fill={index < rating ? "currentColor" : "none"}
                stroke="currentColor"
                className="lws-star"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 15l-3.09 1.636.588-3.427L5 10.545l3.454-.502L10 7l1.546 3.043 3.454.502-2.49 2.664.588 3.427z"
                />
              </svg>
            ))}
          </div>

          <p className="lws-price">BDT {price}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
