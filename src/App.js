import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import BankingApp from "./pages/BankingApp";
import Calculator from "./pages/Calculator";
import CsharpConsole from "./pages/CsharpConsole";
import NewsApp from "./pages/NewsApp";
import Bungle from "./pages/Bungle";
import Vulcan from "./pages/Vulcan";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Router>
      <div className="App">
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/1" element={<NewsApp />} />
            <Route path="/2" element={<BankingApp />} />
            <Route path="/3" element={<CsharpConsole />} />
            <Route path="/4" element={<Calculator />} />
            <Route path="/5" element={<Bungle />} />
            <Route path="/6" element={<Vulcan />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
