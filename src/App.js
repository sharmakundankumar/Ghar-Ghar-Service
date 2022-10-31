import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Index'
import Home from './Pages/Home/index'
import About from './Pages/About/index'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Team from './Pages/Team'
import Blog from './Pages/Blog'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          title="Kundan Kumar Sharma"
          Home="Home"
          About="About"
          Contact="Contact"
          Team="Team"
          Services="Services"
          Blog="Blog"
        />

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
