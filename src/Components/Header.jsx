import React, { useState } from "react";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header className="bg-hero-image-mobile flex flex-col gap-16 py-4 px-2">
      <nav className="flex justify-between items-center p-2">
        <img src="./images/logo.svg" alt="" />
        <ul className={`nav--list ${click ? "active" : ""}`}>
          <li className=" py-2 px-4">About</li>
          <li className="py-2 px-4">Services</li>
          <li className="py-2 px-4">Projects</li>
          <li className="uppercase transition ease-in duration-300 py-2 px-4">
            contact
          </li>
        </ul>
        <FontAwesomeIcon
          className="cursor-pointer text-white"
          onClick={handleClick}
          icon={click ? faTimes : faBars}
        />
      </nav>
      <h1 className="header--heading uppercase text-white font-bold mx-auto">
        we are creative
      </h1>
      <img
        className="w-10 h-28 mx-auto"
        src="./images/icon-arrow-down.svg"
        arid-hidden="true"
        alt=""
      />
    </header>
  );
};

export default Header;
