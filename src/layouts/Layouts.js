import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/post">Post</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
