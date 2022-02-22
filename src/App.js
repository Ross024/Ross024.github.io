import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
