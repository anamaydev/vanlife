import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";
import Layout from "./components/Layout";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh flex flex-col">
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />}/>
            <Route path="/vans/:id" element={<VanDetails />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
