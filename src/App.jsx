import "./App.css";
import Navbar from "./components/Navbar";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import {Provider} from "react-redux"
import store from "./redux/store";

function App() {
  return (
    <>
    <Provider store={store}>
      <Navbar></Navbar>

      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
         <BookList></BookList>
         <BookForm></BookForm>
        </div>
      </main>
    </Provider>
     
    </>
  );
}

export default App;
