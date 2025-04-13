import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/react-task19/">Home</Link>
        <Link to="/react-task19/post">Post</Link>
        <Link to="/react-task19/photos">Photos</Link>
        <Link to="/react-task19/contacts">Contacts</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
