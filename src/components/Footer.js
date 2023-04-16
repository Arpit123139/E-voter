import React from "react";
import "./footer.css"
import appstore from "../assets/appstore.jpg";
import playstore from "../assets/playstore.jpg";
const Footer = () => {
    return (
      <div className="footer">
        <div className="top">
        <div>
          <h1>Electhon</h1>
           <p>Make your voting experience easy.</p>
        </div>
        <div>
          <a href="https://www.facebook.com/ECI">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/ecisveep/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://www.linkedin.com/company/eci-india/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/ECISVEEP">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
        </div>
        <div className="bottom">
          <div>
            <h4>Quick Links</h4>
            <a href="https://www.nvsp.in/">Apply for Voter Card</a>
            <a href="https://eci-citizenservices.eci.nic.in/">Public Grievance</a>
            <a href="https://rti.eci.nic.in/">RTI Online</a>
            <a href="https://play.google.com/store/apps/details?id=in.nic.eci.cvigil&hl=en_US">Download cVIGIL</a>
          </div>
          <div>
            <h4>Media and Publications</h4>
            <a href="https://eci.gov.in/files/category/10-current-issues/">Current Issues</a>
            <a href="https://eci.gov.in/files/category/11-press-releases/">Press Releases</a>
            <a href="https://eci.gov.in/statistical-report/statistical-reports/">Statistical Report</a>
            <a href="https://eci.gov.in/files/category/4-manuals/" >Manuals</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="https://eci.gov.in/website-policy/terms-conditions-r2/">Terms and Conditions</a>
            <a href="https://eci.gov.in/important-instructions/">Important Instructions</a>
            <a href="https://eci.gov.in/contact-us/contact-us/">Contact Us</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="/">Term of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a> 
          </div>
        </div>
      </div>
        
  
    );
  }
  

export default Footer;
