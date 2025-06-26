import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/vans/Vans.jsx";
import VanDetails from "./pages/vans/VanDetails.jsx";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout.jsx";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh flex flex-col">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />}/>
            <Route path="vans/:id" element={<VanDetails />} />

            <Route path="host" element={<HostLayout/>}>
              <Route index element={<Dashboard/>} />
              <Route path="income" element={<Income/>} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
