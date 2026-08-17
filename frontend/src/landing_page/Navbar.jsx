import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const navClass = ({ isActive }) =>
    `nav-link ${isActive ? "menu selected" : "menu"}`;

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="media/TradingWave_logo.jpeg" alt="Logo" style={{ width: "190px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto align-items-end ">
            <li className="nav-item text-muted">
              <NavLink to="/signup" className={navClass}>
                Signup
              </NavLink>
            </li>
            <li className="nav-item text-muted">
              <NavLink className={navClass} to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item text-muted">
              <NavLink className={navClass} to="/Product" >Product</NavLink>
            </li>
            <li className="nav-item text-muted">
              <NavLink  className={navClass} to="/Pricing">Pricing</NavLink >
            </li>
            <li className="nav-item text-muted">
              <NavLink  className={navClass} to="/Support">Support</NavLink >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
