import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Vans from "./pages/vans/Vans.jsx";
import VanDetails from "./pages/vans/VanDetails.jsx";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import HostVans from "./pages/host/HostVans";
import HostVansInfo from "./pages/host/HostVansInfo";
import HostVansPricing from "./pages/host/HostVansPricing";
import HostVansPhotos from "./pages/host/HostVansPhotos";
import HostVansDetails from "./pages/host/HostVansDetails";
import Reviews from "./pages/host/Reviews";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import AuthRequired from "./components/AuthRequired";


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
            <Route path="login" element={<Login />} />

            <Route element={<AuthRequired />} >
              <Route path="host" element={<HostLayout/>}>
                <Route index element={<Dashboard/>} />
                <Route path="income" element={<Income/>} />
                <Route path="vans">
                  <Route index element={<HostVans/>}/>
                  <Route path=":id" element={<HostVansDetails/>}>
                    <Route index element={<HostVansInfo/>} />
                    <Route path="pricing" element={<HostVansPricing/>} />
                    <Route path="photos" element={<HostVansPhotos/>} />
                  </Route>
                </Route>
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
