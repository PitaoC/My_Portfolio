import { useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo-2.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // Keep the navbar visible while the mobile menu is open.
      if (isOpen) {
        lastScrollY.current = current;
        return;
      }

      const delta = 5; // Small threshold to avoid jitter on slow scroll.

      if (current < 10) {
        setIsVisible(true);
      } else if (current > lastScrollY.current + delta) {
        setIsVisible(false);
      } else if (current + delta < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <div
      id="nav"
      className={`w-screen flex items-center justify-between lg:py-3 py-2 px-6 bg-slate-800/90 backdrop-blur border-b-2 border-gray-700 fixed top-0 left-0 z-50 transition-transform duration-300 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >

      <div id="logo" className="text-white text-xl font-bold">
        <img src={Logo} alt="" className="w-7 lg:w-12"/>
      </div>

      <div
        id="nav-but"
        className="hidden lg:flex flex-row text-sm font-medium font-roboto tracking-widest">
        <a href="#Home" className="text-white mx-4 hover:text-red-600">Home</a>
        <a href="#About" className="text-white mx-4 hover:text-red-600">About</a>
        <a href="#Teams" className="text-white mx-4 hover:text-red-600">Team</a>
        <a href="#Projects" className="text-white mx-4 hover:text-red-600">Projects</a>
        <a href="#Contact" className="text-white mx-4 hover:text-cyan-400">Contact</a>
      </div>


      <div
        className="lg:hidden text-white lg:text-3xl text-xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰"}
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-slate-900 flex flex-col items-center lg:hidden text-sm font-medium font-roboto tracking-widest py-4">
          <a href="#Home" className="text-white my-2 hover:text-red-600" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#About" className="text-white my-2 hover:text-red-600" onClick={() => setIsOpen(false)}>About</a>
          <a href="#Teams" className="text-white my-2 hover:text-red-600" onClick={() => setIsOpen(false)}>Team</a>
          <a href="#Projects" className="text-white my-2 hover:text-red-600" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#Contact" className="text-white my-2 hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
