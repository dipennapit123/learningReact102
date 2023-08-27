import "./Navbar.css";
const Navbar = () => {
  return (
    <nav classname="navbar">
      <ul classname="nav-list">
        <li className="navbar-item">
          <a href="#">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#">About</a>
        </li>
        <li className="navbar-item">
          <a href="#">Services</a>
        </li>
        <li className="navbar-item">
          <a href="#">Portfolio</a>
        </li>
        <li className="navbar-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
