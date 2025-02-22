import React from "react";
import "./App.css";
import AppRoutes from "./shared-components/router/router";
import { Provider } from "react-redux";
import store from "./shared-components/react-redux-store/Store";

function App() {
  return (
    <>
      <React.StrictMode>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </React.StrictMode>
    </>
  );
}

export default App;
