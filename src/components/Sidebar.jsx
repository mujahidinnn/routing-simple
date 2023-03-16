import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="flex flex-col font-semibold">
      <Link
        to="/dashboard"
        style={{ color: pathname === "/dashboard" && "blue" }}
      >
        Profile
      </Link>
      <Link
        to="/dashboard/galeri"
        style={{ color: pathname === "/dashboard/galeri" && "blue" }}
      >
        Galeri
      </Link>
      <Link
        to="/dashboard/video"
        style={{ color: pathname === "/dashboard/video" && "blue" }}
      >
        Video
      </Link>
      <Link to="/">Logout</Link>
    </nav>
  );
};

export default Sidebar;
