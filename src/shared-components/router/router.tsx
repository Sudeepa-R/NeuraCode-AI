import { Routes, Route, Outlet } from "react-router-dom";
// import Dashboard from "../../dashboard";
// import PackagesIndex from "../../dashboard/packages";
// import ContactIndex from "../../dashboard/contact";
import PageNotFound from "../pageNotFound/404NotFound";
import Login from "../../pages/modules/login/Login";
import DashboardMainPage from "../../dashboard/DashboardMainPage";
import PackagesPage from "../../dashboard/packages/PackagesPage";
import ContactUsPage from "../../dashboard/contact/ContactUs";
import Template from "../../dashboard/Template";

const LayoutWrapper = () => {
  return (
    <DashboardMainPage>
      <Outlet />
    </DashboardMainPage>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route index path="/" element={<Dashboard />} />
      <Route path="/packages" element={<PackagesIndex />} />
      <Route path="/contactUs" element={<ContactIndex />} /> */}
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Login />} />

      <Route element={<LayoutWrapper />}>
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/" element={<Template />} />
        <Route path="/home" element={<Template />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
