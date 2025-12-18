import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/Netflix_Logo_RGB.png";

// Material UI Icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  // State for toggling search bar
  const [showSearch, setShowSearch] = useState(false);

  // State for toggling account dropdown
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const handleLogoClick = () => {
    console.log("Logo clicked → navigate to Home");
    // If using React Router: navigate("/");
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleNotificationsClick = () => {
    alert("No new notifications!");
  };

  const handleAccountClick = () => {
    setShowAccountMenu(!showAccountMenu);
  };

  return (
    <div className="netflix-header">
      {/* Left: Logo */}
      <div className="header-left" onClick={handleLogoClick}>
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
        <SearchIcon className="icon" onClick={handleSearchClick} />
        <NotificationsNoneIcon className="icon" onClick={handleNotificationsClick} />
        <AccountBoxIcon className="icon" onClick={handleAccountClick} />
        <ArrowDropDownIcon className="icon" onClick={handleAccountClick} />
      </div>

      {/* Conditional Search Bar */}
      {showSearch && (
        <div className="search-bar">
          <input type="text" placeholder="Search movies, TV shows..." />
        </div>
      )}

      {/* Conditional Account Dropdown */}
      {showAccountMenu && (
        <div className="account-menu">
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
