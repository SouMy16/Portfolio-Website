import React, {useState,useEffect} from 'react';
import './Contact.css';

import {BsWhatsapp, BsGithub, BsInstagram, BsTwitter, BsLinkedin} from "react-icons/bs";

function Contact() {

  const [active,setactive] = useState(false);

    useEffect(() => {
        function scrollAnimation() {
            const animationPoint = 300;
            const windowHeight = window.innerHeight;
            const contact = document.querySelector(".contact");
            var contact_top = contact.getBoundingClientRect().top;
            if(contact_top < windowHeight - animationPoint) {
                setactive(true);
            }
        }
        scrollAnimation();
        window.addEventListener("scroll", scrollAnimation);
    },[]);

  return (
    <div className={`contact ${active && "active"}`} id='Contact'>
      <h1>
        <span>Contact</span> <b>me</b>
      </h1>
      <div className="socials">
        <a href="https://www.linkedin.com/in/soumya-agrawal-ab1984202" target={`_blank`}>
        <div className="icons" style={{'--c':"#1d3ffc"}}>
          <BsLinkedin className="social-icons" />
          <div className="tooltip">LinkedIn</div>
        </div>
        </a>
        <a href="https://wa.me/7999599771" target={`_blank`}>
        <div className="icons" style={{'--c':"#01a72e"}}>
          <BsWhatsapp className="social-icons" />
          <div className="tooltip">Whatsapp</div>
        </div>
        </a>
        <a href="https://github.com/SouMy16" target={`_blank`}>
        <div className="icons" style={{'--c':"#7401d3"}}>
          <BsGithub className="social-icons" />
          <div className="tooltip">GitHub</div>
        </div>
        </a>
        <a href="https://www.instagram.com/soumyx._.agrawal/" target={`_blank`}>
        <div className="icons" style={{'--c':"#d3431f"}}>
          <BsInstagram className="social-icons" />
          <div className="tooltip">Instagram</div>
        </div>
        </a>
        <a href="https://twitter.com/Soumy_16" target={`_blank`}>
        <div className="icons" style={{'--c':"#05aef6"}}>
          <BsTwitter className="social-icons" />
          <div className="tooltip">Twitter</div>
        </div>
        </a>
      </div>
    </div>
  )
}

export default Contact