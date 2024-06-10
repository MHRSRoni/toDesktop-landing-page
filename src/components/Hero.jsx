import arrow from "@/assets/asset 2.svg";
import line from "@/datas/companies.js";
import React, { useRef } from "react";
import {
  FaArrowRight,
  FaFileCode,
  FaHandBackFist,
  FaLaptop,
} from "react-icons/fa6";
import { useLineMoving } from "../hooks/useLineMoving";
import CompanyCard from "./CompanyCard";
const Hero = () => {
  const line01 = useRef(null);
  const line02 = useRef(null);
  const line03 = useRef(null);

  // useCallback(()=>useLineMoving(line01, true, 0.8, 48*4), [line01.current])
  const [style01] = useLineMoving(line01, true, 0.15, -48 * 4);
  const [style02] = useLineMoving(line02, false, 0.15, 32 * 4);
  const [style03] = useLineMoving(line03, true, 0.15, -48 * 4);

  return (
    <div
      data-role="hero"
      className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent px-6 pt-6"
    >
      <div
        data-role="hero-content"
        className="mx-auto flex max-w-2xl flex-col sm:items-center sm:text-center "
      >
        <div
          data-role="version control"
          className="group my-6 flex w-fit  items-center gap-2 rounded-lg border border-yellow-300 bg-yellow-50 px-2 py-1 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="h-2 w-2 rounded-full border border-yellow-600 bg-yellow-400"></div>
          <p className="font-heading font-medium text-yellow-600">
            v0.21.1:{" "}
            <span className="text-yellow-800"> Find-in-page bug fixes</span>
          </p>
          <FaArrowRight className="text-yellow-600 transition duration-300 group-hover:translate-x-1" />
        </div>
        <div
          data-role="hero-feature"
          className="my-6 hidden items-center  gap-8 text-gray-500 sm:flex"
        >
          <div className="flex items-center gap-2">
            <FaFileCode className="text-sm" /> <span>Code Optional</span>
          </div>
          <div className="flex items-center gap-2">
            <FaHandBackFist className="text-sm" />
            <span>Drag & drop builder</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLaptop className="text-sm" />
            <span>Windows, Mac, Linux</span>
          </div>
        </div>
        <h1 className="mt-4 text-4xl font-semibold  leading-snug sm:text-6xl">
          Web app to desktop app in minutes
        </h1>
        <p className="mt-4 text-xl text-gray-800 sm:mt-8 sm:text-2xl">
          Take your web app codebase and transform it into a cross platform
          desktop app with native functionality.
        </p>
        <div
          data-role="btn-container"
          className="mt-12 flex flex-col gap-4 sm:flex-row "
        >
          <button className="rounded-lg bg-primary px-8 py-3  font-semibold text-white hover:bg-opacity-90 ">
            Download now
          </button>
          <button className="rounded-lg border border-gray-400 px-8  py-3 font-semibold hover:border-gray-800 ">
            Read Docs
          </button>
        </div>
      </div>
      <div data-role="companies" className="mt-16 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <img src={arrow} className="translate-y-2" />
          <p className="font-semibold text-gray-800">
            APPS POWERED BY TODESKTOP
          </p>
          <img src={arrow} className="translate-y-2 -scale-x-100" />
        </div>
        <div data-role="line-container" className="mt-8 flex flex-col gap-4">
          <div
            data-role="line01"
            className="flex -translate-x-48 gap-4 transition-transform  ease-linear"
            ref={line01}
            style={style01}
          >
            {line.line1.map((item, index) => (
              <CompanyCard key={index} img={item.img} name={item.name} />
            ))}
          </div>
          <div
            data-role="line02"
            className="flex -translate-x-32 gap-4 transition-transform  ease-linear"
            ref={line02}
            style={style02}
          >
            {line.line2.map((item, index) => (
              <CompanyCard key={index} img={item.img} name={item.name} />
            ))}
          </div>
          <div
            data-role="line03"
            className="flex -translate-x-48 gap-4 transition-transform ease-linear  md:hidden"
            ref={line03}
            style={style03}
          >
            {line.line3.map((item, index) => (
              <CompanyCard key={index} img={item.img} name={item.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
