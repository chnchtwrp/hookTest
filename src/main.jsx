import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import BtContext from "./BtContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BtContext>
      <Header />
      <App />
      <Footer />
    </BtContext>
  </React.StrictMode>
);