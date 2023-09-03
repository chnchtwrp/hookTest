import { useContext, useState } from "react";

import "./App.css";
import { ButtonContext } from "./BtContext";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Footer";
import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/pages/login";
import Logout from "./components/pages/Logout";

export const AppComp = () => {
  // const [count, setCount] = useState(0);
  const { btw, setBtw } = useContext(ButtonContext);
  return (
    <>
      <div>
        <a onClick={() => setBtw("world")}>
          <img src="/UpArrow.png" className="logo" alt="Arrow logo" />
        </a>
      </div>
      <h1>Swap word by useContext</h1>
      <div>
        <a onClick={() => setBtw("hello")}>
          <img src="/DownArrow.png" className="logo" alt="Arrow logo" />
        </a>
      </div>
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login/>,
    },
    {
      path:"logout",
      element:<Logout/>,
    },
  ]);

  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
      {/* <AppComp /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
