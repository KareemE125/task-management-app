import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import NavLinkTab from "@/layouts/components/navbar/NavLinkTab";
import NavbarOptions from "./NavbarOptions";
import { FcParallelTasks } from "react-icons/fc";


export default function Navbar() {

  const [showLinks, setShowLinks] = useState(false);
    
  return (
    <nav className="bg-gray-200 shadow-md dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex gap-2"
        >
          <FcParallelTasks  className="text-4xl text-blue-500 invert dark:invert-0" /> 
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
            T-MNG
          </span>
        </NavLink>

        {/* Buttons Options */}
        <div className="md:order-2">
          <NavbarOptions> 
            {/* Nav Menu Button */}
            <button
              className="focus:ring-2 inline-flex items-center p-1 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:bg-gray-700"
              onClick={() => setShowLinks(!showLinks)}
            >
              <HiMenu className={`${showLinks && 'rotate-90'} duration-200  text-2xl`} />
            </button>
          </NavbarOptions>
        </div>

        {/* Links */}
        <div
          className={`${showLinks? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <div className="flex flex-col gap-4 font-medium p-4 md:p-0 mt-4 border border-gray-200 rounded-lg bg-gray-100 md:flex-row md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavLinkTab path="/" label="Home" />
            <NavLinkTab path="/tasks" label="Tasks" />
            <NavLinkTab path="/about-us" label="About" />
            <NavLinkTab path="/contact" label="Contact" />
          </div>
        </div>

      </div>
    </nav>
  );
}
