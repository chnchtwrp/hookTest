import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BtContext,UserProvider } from "./BtContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
    <BtContext>
      <App />
    </BtContext>
    </UserProvider>
  </React.StrictMode>
);
