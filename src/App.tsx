import React from "react";
import "./App.css";
import AppRoutes from "./shared-components/router/router";

function App() {
  return (
    <>
      <React.StrictMode>
        <AppRoutes />
      </React.StrictMode>
    </>
  );
}

export default App;
