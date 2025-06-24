import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home(){
  return (
    <h1>Yo this is a home page</h1>
  )
}

function About(){
  return (
    <h1>about page this is a</h1>
  )
}

export default App
