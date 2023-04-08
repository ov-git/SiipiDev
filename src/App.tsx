import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./views/MainPage";
import EventsPage from "./views/EventsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />

        <Route path="tapahtumat" element={<EventsPage />}></Route>
        {/*TODO <Route path="viikko-tapahtumat" element={<h1>Ok</h1>}></Route> */}
      </Route>
    </Routes>
  );
}

export default App;
