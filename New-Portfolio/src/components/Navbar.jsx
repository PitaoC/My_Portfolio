import { useState } from "react";
import Logo from "../assets/logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="nav" className="w-screen flex items-center justify-between py-3 px-6 bg-slate-800 relative border-b-2 border-gray-700">

      <div id="logo" className="text-white text-xl font-bold">
        <img src={Logo} alt="" className="w-10 lg:w-12"/>
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
        className="lg:hidden text-white text-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰"}
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-slate-900 flex flex-col items-center lg:hidden text-sm font-medium font-roboto tracking-widest py-4">
          <a href="#Home" className="text-white my-2 hover:text-red-600">Home</a>
          <a href="#About" className="text-white my-2 hover:text-red-600">About</a>
          <a href="#Teams" className="text-white my-2 hover:text-red-600">Team</a>
          <a href="#Projects" className="text-white my-2 hover:text-red-600">Projects</a>
          <a href="#Contact" className="text-white my-2 hover:text-cyan-400">Contact</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
