import { Person, Mail } from "@material-ui/icons"

export default function NavBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left" onClick={() => setMenuOpen(false)}>
                <a href="#intro" className="logo">Rossco</a>
                <div className="item-container">
                    <Person className="icon" />
                    <span>+1 250 857 4897</span>
                </div>
                <div className="item-container">
                    <Mail className="icon" />
                    <span>ross.scharbach@gmail.com</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
