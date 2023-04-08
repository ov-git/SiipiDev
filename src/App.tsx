import Map from "./components/Map";
import Slider from "./components/Slider";
import NavBar from "./components/NavBar";

import haukka from "./assets/haukka-transparent.png";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./views/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />

        <Route path="tapahtumat" element={<h1>Ok</h1>}></Route>
        <Route path="viikko-tapahtumat" element={<h1>Ok</h1>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
