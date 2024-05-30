import logo from "@/assets/asset 0.png";
import icon1 from "@/assets/asset 1.svg";
import classNames from "classnames";
import { useState } from "react";

import { FaArrowRight, FaBars, FaXmark } from "react-icons/fa6";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-3 ">
      <div data-role="logo" className="flex flex-1 items-center gap-2">
        <img src={logo} alt="logo" />
        <p className="font-heading text-lg">ToDesktop</p>
      </div>
      <ul
        data-role="menu desktop-version"
        className="hidden items-center gap-12 lg:flex"
      >
        <li className="cursor-pointer font-medium hover:text-primary">
          Pricing
        </li>
        <li className="cursor-pointer font-medium hover:text-primary">Docs</li>
        <li className="cursor-pointer font-medium hover:text-primary">
          Changelog
        </li>
        <li className="cursor-pointer font-medium hover:text-primary">Blogs</li>
        <li className="cursor-pointer font-medium hover:text-primary">Login</li>
      </ul>

      <div
        data-role="navbar mobile-version"
        className={classNames("fixed inset-0 bg-white lg:hidden", {
          hidden: !open,
          block: open,
        })}
      >
        <div className="flex items-center justify-between p-3">
          <div data-role="logo" className="flex items-center gap-2">
            <img src={logo} alt="logo" />
            <p className="font-heading text-lg">ToDesktop</p>
          </div>
          <button
            data-role="menu-close"
            className="text-gray-600  lg:hidden"
            onClick={() => setOpen(false)}
          >
            <FaXmark />
          </button>
        </div>
        <ul data-role="menu mobile-version" className=" mt-6">
          <li className="m-3 w-full cursor-pointer p-3 font-medium hover:bg-gray-50">
            Pricing
          </li>
          <li className="m-3 w-full cursor-pointer p-3 font-medium hover:bg-gray-50">
            Docs
          </li>
          <li className="m-3 w-full cursor-pointer p-3 font-medium hover:bg-gray-50">
            Changelog
          </li>
          <li className="m-3 w-full cursor-pointer p-3 font-medium hover:bg-gray-50">
            Blogs
          </li>
          <li className="m-3 w-full cursor-pointer p-3 font-medium hover:bg-gray-50">
            Login
          </li>
        </ul>
        <div className="h-[1px] bg-gray-300"></div>
        <button className="group  mt-6 flex w-full items-center gap-2  rounded-lg px-6 py-2 hover:bg-gray-50">
          <img src={icon1} alt="developer button" />
          <span className="font-medium">Electron Developers</span>
        </button>
      </div>

      <div className="hidden lg:flex flex-1 justify-end">
        <button className=" flex items-center gap-2 rounded-lg border border-gray-400 px-6 py-4 hover:border-gray-800 self-end">
          <img src={icon1} alt="developer button" />
          <span className="font-medium">Electron Developers</span>
          <FaArrowRight />
        </button>
      </div>

      <button
        data-role="menu-open"
        className="text-gray-600 lg:hidden"
        onClick={() => setOpen(true)}
      >
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
