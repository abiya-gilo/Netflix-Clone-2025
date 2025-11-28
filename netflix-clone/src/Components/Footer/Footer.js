// Import React so we can use JSX
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Import the CSS file for footer styles
import "./Footer.css";

function Footer() {
  return (
    // Main footer container
    <div className="netflix-footer">
      {/* Social media icons row */}
      <div className="footer-socials">
        <FacebookIcon className="social-icon" />
        <TwitterIcon className="social-icon" />
        <InstagramIcon className="social-icon" />
        <YouTubeIcon className="social-icon" />
      </div>

      {/* Footer navigation links */}
      <div className="footer-links">
        <ul>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <button className="service-code">Service Code</button>
        <p>© &copy; 1997-2025 Netflix, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
