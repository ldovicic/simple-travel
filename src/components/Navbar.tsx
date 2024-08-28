import logo from "../assets/airplane.png"

export default function Navbar() {
    return (
        <nav>
                <img src={logo} className="nav--logo"></img>
                <span className="nav--text">travel.</span>
        </nav>
    )
}