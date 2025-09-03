import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetEditMode } from "../redux/books/actions";
import { postBook } from "../redux/books/thunk/postBook";
import { updateBook } from "../redux/books/thunk/updateBook";

const BookForm = () => {
  const update = useSelector((state) => state.bookReducer.update);

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);

  const books = useSelector((state) => state.bookReducer.books);
  const editableBook = books.find((book) => book.id === update.bookId);
  

   useEffect(() => {
    if (update?.editeMode && editableBook) {
      setName(editableBook.name);
      setAuthor(editableBook.author);
      setThumbnail(editableBook.thumbnail);
      setPrice(editableBook.price);
      setRating(editableBook.rating);
      setFeatured(editableBook.featured);
    }
  }, [update?.editeMode, editableBook]);
  

  const bookInfo = { name, author, thumbnail, price, rating, featured };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (update?.editeMode) {
      dispatch(updateBook(update.bookId, bookInfo))
      
      
    } else {
      dispatch(postBook(bookInfo));
    }
    dispatch(resetEditMode());

    setName("");
    setAuthor("");
    setThumbnail("");
    setPrice("");
    setRating("");
    setFeatured(false);
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form onSubmit={handleSubmit} className="book-form">
          <div className="space-y-2">
            <label>Book Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
            />
          </div>

          <div className="space-y-2">
            <label>Author</label>
            <input
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
            />
          </div>

          <div className="space-y-2">
            <label>Image Url</label>
            <input
              onChange={(e) => setThumbnail(e.target.value)}
              value={thumbnail}
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label>Price</label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
              />
            </div>

            <div className="space-y-2">
              <label>Rating</label>
              <input
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              onChange={(e) => setFeatured(e.target.checked)}
              checked={featured}
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
            />
            <label className="ml-2 text-sm">This is a featured book</label>
          </div>

          <button type="submit" className="submit" id="submit">
            {update?.editeMode ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
