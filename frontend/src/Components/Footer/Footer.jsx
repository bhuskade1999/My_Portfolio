import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is <b>Bhushan Bhuskade</b>. I am a Full-Stack Developer and 
          I'm passionate about learning things and developing myself in order to be a Champion 
          one day!
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/bhuskade1999/" target="black">
          <BsGithub />
        </a>

        <a href="#" target="black">
          <BsLinkedin />
        </a>

        <a href="#" target="black">
          <BsYoutube />
        </a>
        
        <a href="#" target="black">
          <BsInstagram />
        </a>
        

      </div>
    </div>
  );
};

export default Footer;