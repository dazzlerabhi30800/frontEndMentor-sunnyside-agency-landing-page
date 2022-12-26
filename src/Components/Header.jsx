import React, { useState, useRef, useEffect } from "react";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [click, setClick] = useState(false);
  const arrow = useRef();
  const [move, setMove] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const handleMove = () => {
    if (window.innerWidth >= 768) {
      setMove(true);
    } else {
      setMove(false);
    }
  };
  window.addEventListener("resize", handleMove);
  useEffect(() => {
    handleMove();
  }, []);

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    let arrowImg = arrow.current;
    if (move) {
      arrowImg.style.transform = `translateX(-${scroll}px) rotate(${-scroll}deg)`;
    } else {
      arrowImg.style.transform = `translateX(0px) rotate(0deg)`;
    }
    // console.log(arrowImg.classList);
  });

  return (
    <header className="flex flex-col gap-16 md:gap-40 py-4 px-2">
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
          className="cursor-pointer text-white md:hidden"
          onClick={handleClick}
          icon={click ? faTimes : faBars}
        />
      </nav>
      <h1 className="header--heading uppercase text-white font-bold mx-auto">
        we are creatives
      </h1>
      <img
        className="w-10 h-28 mx-auto arrow-style"
        src="./images/icon-arrow-down.svg"
        arid-hidden="true"
        alt=""
        ref={arrow}
      />
    </header>
  );
};

export default Header;
