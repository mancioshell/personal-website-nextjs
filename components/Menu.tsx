import { useState, useRef, useEffect } from "react";

const Menu = ({ onClickMenu }: any) => {
  return (
    <nav id="menu" className="mt-5 mb-5 ml-10 flex flex-col text-lg font-sans ">
      <ul className="flex flex-col gap-3 text-[#a8a9b4] menu">
        <li className="flex flex-row">
          <a href="#hero" onClick={onClickMenu}>
            <i className="fa-solid fa-house mr-2 "></i>
            Home
          </a>
        </li>

        <li className=" flex flex-row ">
          <a className="" href="#about" onClick={onClickMenu}>
            <i className="fa-solid fa-address-card mr-2"></i> About
          </a>
        </li>

        <li className=" flex flex-row ">
          <a className="" href="#resume" onClick={onClickMenu}>
            <i className="fa-solid fa-book-open mr-2"></i> Resume
          </a>
        </li>

        <li className=" flex flex-row ">
          <a className="" href="#skills" onClick={onClickMenu}>
            <i className="fa-solid fa-terminal mr-2"></i> Skills
          </a>
        </li>

        <li className=" flex flex-row">
          <a className="" href="#interests" onClick={onClickMenu}>
            <i className="fa-solid fa-face-laugh mr-2"></i> Interests
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu
