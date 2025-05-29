import React,{useState} from 'react'
import './navbar.css'
import logo from './logo/logo.png'
import ContactMailIcon from "@mui/icons-material/ContactMail";
import {Link} from 'react-scroll'


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menuItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="menuItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="menuItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="menuItem"
        >
          Contact
        </Link>
      </div>
      <button className="menuBtn flex items-center gap-2" onClick={()=>{
        document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
      }}>
        <ContactMailIcon className="menuIcon" />
        Contact Me
      </button>
    </div>
  );
}

export default Navbar