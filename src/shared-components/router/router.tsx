import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../../dashboard";
import PackagesIndex from "../../dashboard/packages";

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/packages" element={<PackagesIndex/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
