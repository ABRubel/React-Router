import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Book from "./components/Book";
import NotFound from "./components/NotFound";
import Booklist from "./components/Booklist";
import Booklayout from "./components/Booklayout";
import NewBook from "./components/NewBook";
import About from "./components/About";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/books" element={<Booklayout />}>
        <Route index element={<Booklist />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default routes;
