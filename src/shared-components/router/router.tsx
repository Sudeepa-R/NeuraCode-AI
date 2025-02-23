import { Routes, Route } from "react-router-dom";
import Dashboard from "../../dashboard";
import PackagesIndex from "../../dashboard/packages";
import ContactIndex from "../../dashboard/contact";
import PageNotFound from "../pageNotFound/404NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Dashboard />} />
      <Route path="/packages" element={<PackagesIndex />} />
      <Route path="/contactUs" element={<ContactIndex />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
