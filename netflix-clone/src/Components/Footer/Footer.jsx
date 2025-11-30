import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

function Footer() {
  return (
    <div className="netflix-footer">
      {/* Social media icons row */}
      <div className="footer-socials">
        <a
          href="https://www.facebook.com/netflix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className="social-icon" />
        </a>
        <a
          href="https://twitter.com/netflix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/netflix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="social-icon" />
        </a>
        <a
          href="https://www.youtube.com/netflix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YouTubeIcon className="social-icon" />
        </a>
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
        <p>© 1997-2025 Netflix, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
