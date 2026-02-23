import logo from "../assets/emergency.png";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo-container">
    <img src={logo} alt="Emergency Coordination System Logo" className="logo" />
  </div>
     <ul className="nav-links">
        <li>Home</li>
        <li>Gallery</li>
        <li>Cover</li>
        <li>Footer</li>
      </ul>
    </nav>
  )
}
export {Navbar};