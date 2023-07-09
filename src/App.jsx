import './App.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home.jsx";
import {Episodes} from "./components/Episodes.jsx";
import {About} from "./components/About.jsx";
import {Contact} from "./components/Contact.jsx";
import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {

  return (
      <div>
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}>Home</Route>
              <Route path="/episodes" element={<Episodes/>}>Episodes</Route>
              <Route path="/about" element={<About/>}>About</Route>
              <Route path="/contact" element={<Contact/>}>Contact</Route>
          </Routes>
          <Footer/>
      </div>

  )
}

export default App
