import React from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    isOpen: true,
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
            {this.state.isOpen === true ? (
              <FaAlignRight
                className="nav-toggle-btn-active"
                onClick={this.handleToggle}
              />
            ) : (
              false
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
