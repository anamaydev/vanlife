import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import About from "./pages/About"
import Home from "./pages/Home"
import Vans from "./pages/Vans"
import Header from "./components/Header"
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh flex flex-col">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}
export default App
