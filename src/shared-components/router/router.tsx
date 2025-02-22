import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../../dashboard";
import PackagesIndex from "../../dashboard/packages";
import ContactIndex from "../../dashboard/contact";
import PageNotFound from "../pageNotFound/404NotFound";

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/packages" element={<PackagesIndex />} />
          <Route path="/contactUs" element={<ContactIndex />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
