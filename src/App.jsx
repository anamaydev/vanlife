import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import AboutPage from "./pages/About"
import HomePage from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh flex flex-col">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}
export default App
