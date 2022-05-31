import Intro from "../components/Intro";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Works from "../components/Works";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Works />
        <Contact />
    </div>
  )
}
