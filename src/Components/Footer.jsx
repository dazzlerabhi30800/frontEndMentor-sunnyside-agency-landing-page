import React from "react";
import Logo from "./Logo.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPinterest,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-12 items-center py-8 bg-emerald-300">
      <Logo />
      <ul className="links flex gap-8 items-center">
        <li className="text-emerald-600 transition ease-in hover:text-emerald-900 cursor-pointer">
          About
        </li>
        <li className="text-emerald-600 transition ease-in hover:text-emerald-900 cursor-pointer">
          Services
        </li>
        <li className="text-emerald-600 transition ease-in hover:text-emerald-900 cursor-pointer">
          Projects
        </li>
      </ul>
      <div className="brand--wrapper flex gap-6">
        <FontAwesomeIcon
          className="text-xl text-emerald-900 transition ease-in-out duration-300 cursor-pointer hover:scale-125"
          icon={faFacebook}
        />
        <FontAwesomeIcon
          className="text-xl text-emerald-900 transition ease-in-out duration-300 cursor-pointer hover:scale-125"
          icon={faInstagram}
        />
        <FontAwesomeIcon
          className="text-xl text-emerald-900 transition ease-in-out duration-300 cursor-pointer hover:scale-125"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          className="text-xl text-emerald-900 transition ease-in-out duration-300 cursor-pointer hover:scale-125"
          icon={faPinterest}
        />
      </div>
    </footer>
  );
};

export default Footer;
