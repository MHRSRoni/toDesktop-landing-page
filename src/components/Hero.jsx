import React from "react";
import {
  FaArrowRight,
  FaFileCode,
  FaHandBackFist,
  FaLaptop,
} from "react-icons/fa6";
const Hero = () => {
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
          className="my-6 hidden items-center  gap-8 sm:flex text-gray-500"
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
    </div>
  );
};

export default Hero;
