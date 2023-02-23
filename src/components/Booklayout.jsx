import { Link, Outlet } from "react-router-dom";

function Booklayout() {
  return (
    <>
      <ul>
        <li>
          <Link to="/books/1">Book 1</Link>
        </li>
        <li>
          <Link to="/books/2">Book 2</Link>
        </li>
        <li>
          <Link to="/books/new">New Book</Link>
        </li>
      </ul>
      <Outlet context={{ hello: "World!" }} />
    </>
  );
}

export default Booklayout;
