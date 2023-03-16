import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login, Register } from "../pages/landingpage";
import DashboardRoute from "./DashboardRoute";
import Dashboard from "../pages/dashboard";
import NotFound from "../pages/notfound";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/dashboard/*"
            element={
              <DashboardRoute>
                <Dashboard />
              </DashboardRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
