import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="app-name">
          <p className="app-name-inner">Flictionary</p>
          <p className="footer-info">
            An OTT Platform With The Concept of Pay As Per View
          </p>
        </div>
        <div className="copyright-section">
          <span>© FluxV1</span>
          <span>Developed By: Laksh, Veerendra, Manav</span>
        </div>
      </div>

      {/* <div className="footer-2">
        <ul>
          <li><Link>Home</Link></li>
          <li><Link>Symptoms</Link></li>
          <li><Link>Upload</Link></li>
          <li><Link>Chatbox</Link></li>
          <li><Link>About Us</Link></li>
          <li><Link>Contact Us</Link></li>
        </ul>
      </div> */}
    </>
  );
}
