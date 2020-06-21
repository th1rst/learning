import React from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-inner-container-left">
            <Link to="/">
              <img
                className="company-logo"
                src={require("../resources/images/companyLogo_small.png")}
                alt="Lambert Travel Logo"
              />
            </Link>
          </div>

          <div className="navbar-inner-container-center">
            <div className="navbar-link-container">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="nav-link">
                  Rooms
                </Link>
              </li>
            </div>
          </div>
          <div className="navbar-inner-container-right">
            <FaAlignRight
              className="nav-toggle-btn-active"
              onClick={this.handleToggle}
            />
          </div>
        </nav>
        <div className={this.state.isOpen ? "phone-nav-container" : undefined}>
          <li>
            <Link to="/" className="phone-nav nav-link">
              Home
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="/rooms" className="phone-nav nav-link">
              Rooms
            </Link>
          </li>
        </div>
      </div>
    );
  }
}

export default Navbar;
