import { useState } from "react";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Gallery from "./pages/Gallery";
import Edit from "./pages/Edit";

import { useRoutes } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const pages = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/create", element: <Create /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/Edit/:id", element: <Edit /> },
  ]);

  return (
    <>
      <Navbar />
      {pages}
    </>
  );
}

export default App;
