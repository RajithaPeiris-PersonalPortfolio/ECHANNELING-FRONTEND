import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Clinic from "./pages/clinic/Clinic";
import Home from "./pages/home/Home";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/clinics" element={<List />}></Route>
        <Route path="/clinics/:id" element={<Clinic />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
