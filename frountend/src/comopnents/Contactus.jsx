import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

import { CiLinkedin } from "react-icons/ci";
let Contactus = () => {
  return ( <>
  <div className="contact-icons">
    <div className="social-media">
      <a href="https://www.facebook.com/jntuhcej" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="icon" />
      </a>
      <a href="https://www.instagram.com/jntuhcej/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icon" />
      </a>
      <a href="https://twitter.com/jntuhcej" target="_blank" rel="noopener noreferrer">
        <CiTwitter className="icon" />
      </a>
      <a href="https://github.com/jntuhcej" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/jntuhcej/" target="_blank" rel="noopener noreferrer">
        <CiLinkedin className="icon" />
      </a>
    </div>

    <div className="contact">
      <a href="mailto:cej@jntuh.ac.in" target="_blank" rel="noopener noreferrer">
        <SiGmail className="icon" />
      </a>
      <p className="contact-detail">cej@jntuh.ac.in</p>
      <a href="tel:+916302503548" target="_blank" rel="noopener noreferrer">
        <FaPhoneAlt className="icon" />
      </a>
      <p className="contact-detail">+91 63025 03548</p>
    </div>
  </div>
  <style jsx>
    {`
    .contact{
    margin-top:3rem;
    }
      .contact-icons {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 2rem;
      }
      .icon {
        margin: 0 1rem;
        transition: all 0.3s ease-in-out;
        color: #212529;
        font-size: 2rem;
      }
      .icon:hover {
        transform: scale(1.2);
        color: #FFC107;
      }
      .contact-detail {
        margin-top: 1rem;
        font-size: 1.2rem;
        text-align: center;
      }
    `}
  </style>
</>);
}
export default Contactus;