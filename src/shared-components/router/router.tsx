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
import CodeConverterIndex from "../../pages/modules/code-converter-page";
import CodeConverterContent from "../../pages/modules/code-converter-page/code-converter-content";
import AppMenus from "../../pages/modules/admin-section/app-menus/app-menu";
import ProtectedRoute from "../protected-rotes/ProtectedRoute";
import AdminSettingsIndex from "../../pages/modules/admin-section";
import { useEffect } from "react";
import { checkTheToken } from "../utils/helper-functions";
// import { use, useEffect } from "react";
// import { checkTheToken } from "../utils/helper-functions";
import { useNavigate } from "react-router-dom";
import ProgrammingLanguages from "../../pages/modules/admin-section/programming-languages/programming-languages";

const LayoutWrapper = () => {
  return (
    <DashboardMainPage>
      <Outlet />
    </DashboardMainPage>
  );
};

const CodeConverterPageWrapper = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!checkTheToken()) {
      navigate("/login");
    }
  }, []);

  return (
    <CodeConverterIndex>
      <Outlet />
    </CodeConverterIndex>
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
        <Route index element={<Template />} />
        <Route path="/home" element={<Template />} />
      </Route>
      <Route element={<ProtectedRoute allowedRoles="admin" />}>
        <Route element={<CodeConverterPageWrapper />}>
          <Route path="/codeconverter" element={<CodeConverterContent />} />
          <Route path="/AppMenu" element={<AppMenus />} />
          <Route
            path="/ProgrammingLanguages"
            element={<ProgrammingLanguages />}
          />
          <Route path="/admin-settings" element={<AdminSettingsIndex />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
