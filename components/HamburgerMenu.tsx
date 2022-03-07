import { useState, useRef, useEffect } from "react";

const HamburgerMenu = ({ isVisible = false, onClickMenu }: any) => {
  useEffect(() => {
    toggleMenu(isVisible);
  }, [isVisible]);

  const [opened, toggleMenu] = useState(isVisible);

  const clickMenu = (e: any) => {
    e.preventDefault();
    toggleMenu(!opened);
    onClickMenu();
  };

  return (
    <div className="relative z-20">
      {!opened ? (
        <div className="md:hidden fixed top-4 right-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#149ddd]">
            <a href="" onClick={clickMenu}>
              <i className="fa-solid fa-bars text-white fa-xl"></i>
            </a>
          </div>
        </div>
      ) : (
        <div className="md:hidden fixed top-4 right-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#149ddd]">
            <a href="" onClick={clickMenu}>
              <i className="fa-solid fa-xmark text-white fa-xl"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
