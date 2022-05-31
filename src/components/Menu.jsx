import LinkItem from "./LinkItem"

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")} id="menu">
        <ul>
            <LinkItem setMenuOpen={setMenuOpen} linkLocation="intro" linkName="Home" />
            <LinkItem setMenuOpen={setMenuOpen} linkLocation="about" linkName="About" />
            <LinkItem setMenuOpen={setMenuOpen} linkLocation="portfolio" linkName="Portfolio" />
            <LinkItem setMenuOpen={setMenuOpen} linkLocation="works" linkName="Works" />
            <LinkItem setMenuOpen={setMenuOpen} linkLocation="contact" linkName="Contact" />
        </ul>
    </div>
  )
}
