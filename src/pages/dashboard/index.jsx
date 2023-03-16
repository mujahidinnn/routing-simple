import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Galeri from "./Galeri";
import Video from "./Video";
import NotFound from "../notfound";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="w-[30%]">

      <Sidebar />
      </div>
      <div className="w-[70%] pr-10">

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/video" element={<Video />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
