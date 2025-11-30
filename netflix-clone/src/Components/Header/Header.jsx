import React from "react";
import "./Header.css";
import logo from "../../assets/Netflix_Logo_RGB.png";

// Material UI Icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <div className="netflix-header">
      {/* Left: Logo */}
      <div className="header-left">
        <img src={logo} alt="Netflix Logo" className="netflix-logo" />
      </div>

      {/* Center: Navigation */}
      <div className="header-center">
        <ul className="nav-list">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language ▾</li>
        </ul>
      </div>

      {/* Right: Icons */}
      <div className="header-right">
        <SearchIcon className="icon" />
        <NotificationsNoneIcon className="icon" />
        <AccountBoxIcon className="icon" />
        <ArrowDropDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
