import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mt-0">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="heading-insulence">
          <h2>Insulence</h2>
        </div>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 ml-5">
            <li className="nav-item fw-medium margin-align">
              <Link className="nav-link nav-menu fs-4 ms-5 margin-align" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item fw-medium">
              <Link className="nav-link nav-menu fs-4 ms-5" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item fw-medium">
              <Link className="nav-link nav-menu fs-4 ms-5" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item fw-medium ">
              <Link className="nav-link nav-menu fs-4 ms-5" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item fw-medium ">
              <Link className="nav-link nav-menu fs-4 ms-5" to="/signup">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
