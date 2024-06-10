import logo from "@/assets/asset 0.png";
import asset37 from "/src/assets/asset 37.svg"
import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="mx-auto px-[88px] lg:px-16">
      <section className="section container flex flex-col items-center justify-center gap-8 rounded-xl border border-gray-300 bg-slate-50 py-12 lg:flex-row-reverse lg:justify-between lg:border-none ">
        <h6 className="font-light cursor-pointer">Documentation</h6>
        <div className="flex items-center gap-8 text-lg text-gray-500">
          <FaTwitter className="hover:text-gray-800 cursor-pointer"/>
          <FaGithub className="hover:text-gray-800 cursor-pointer"/>
        </div>
        <div data-role="logo" className="flex flex-1 items-center gap-2 cursor-pointer">
          <img src={logo} alt="logo" />
          <p className="font-heading text-lg">ToDesktop</p>
        </div>
      </section>
      <div className=" flex flex-col items-center justify-center mt-12 mb-24 gap-4">
        <div className="flex items-center gap-2 text-gray-600  text-sm">
          <img src={asset37} className="h-4 w-4" />A Y
          Combinator company.
        </div>
        <p className="text-gray-400 text-sm">© 2024 ToDesktop, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
