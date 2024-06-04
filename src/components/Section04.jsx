import React from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";
const Section04 = () => {
  return (
    <section className="section container">
      <h2 className="max-w-2xl text-5xl font-semibold leading-snug mb-12">
        Choose a plan that fits your needs
      </h2>
      <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-1 gap-8">
        <div className="flex flex-col gap-6 px-8 pt-12 pb-8 border rounded-xl w-full lg:border-none lg:bg-slate-50">
          <h6 className="text-4xl font-medium font-heading">Free</h6>
          <p className="text-lg font-light">
            For personal use or testing your app before deploying to customers.
          </p>
          <h6 className="uppercase ">Key Features</h6>
          <ul className="text-lg flex flex-col gap-3">
            <li className="flex items-center gap-4 text-lg font-light text-gray-800">
              <FaCheck />
              Free for personal use
            </li>
            <li className="flex items-center gap-4 text-lg font-light text-gray-800">
              <FaCheck />
              Free for personal use
            </li>
            <li className="flex items-center gap-4 text-lg font-light text-gray-800">
              <FaXmark />
              Free for personal use
            </li>
            <li className="flex items-center gap-4 text-lg font-light text-gray-800">
              <FaXmark />
              Free for personal use
            </li>
          </ul>
          <button className="border border-gray-300 rounded-lg py-3 font-medium text-primary">Read Docs</button>
        </div>
        <div className="flex flex-col gap-6 px-8 pt-12 pb-8 border rounded-xl w-full lg:border-none lg:bg-slate-50">
          <h6 className="text-4xl font-medium font-heading">Essential</h6>
          <p className="text-lg font-light">
          For simple desktop apps.
          </p>
          <p className="text-lg font-light"><span className="text-2xl font-semibold">$49</span>/month</p>
          <h6 className="uppercase ">Key Features</h6>
          <ul className="text-lg flex flex-col gap-3">
            <li className="flex items-center gap-4 text-lg font-light text-gray-800">
              <FaCheck />
              Free for personal use
            </li>
            <li className="flex items-center gap-4 text-lg font-light text-gray-800">
              <FaCheck />
              Free for personal use
            </li>
            <li className="flex items-center gap-4 text-lg font-light text-gray-800">
              <FaXmark />
              Free for personal use
            </li>
            <li className="flex items-center gap-4 text-lg font-light text-gray-800">
              <FaXmark />
              Free for personal use
            </li>
          </ul>
          <button className="border border-gray-300 rounded-lg py-3 font-medium text-primary">Read Docs</button>
        </div>
        <div className="flex flex-col gap-6 px-8 pt-12 pb-8 border rounded-xl w-full lg:border-none lg:bg-slate-50 relative">
            <span className="absolute top-0 right-12 text-blue-800 bg-indigo-100 px-3 py-2 rounded-full -translate-y-1/2 font-semibold text-sm font-heading">Most Popular</span>
          <h6 className="text-4xl font-medium font-heading">Professional</h6>
          <p className="text-lg font-light">
          For sophisticated desktop apps.
          </p>
          <p className="text-lg font-light"><span className="text-2xl font-semibold">$99</span>/month</p>

          <h6 className="uppercase ">Key Features</h6>
          <ul className="text-lg flex flex-col gap-3">
            <li className="flex items-center gap-4 text-lg font-light text-gray-800">
              <FaCheck />
              Free for personal use
            </li>
            <li className="flex items-center gap-4 text-lg font-light text-gray-800">
              <FaCheck />
              Free for personal use
            </li>
            <li className="flex items-center gap-4 text-lg font-light text-gray-800">
              <FaXmark />
              Free for personal use
            </li>
            <li className="flex items-center gap-4 text-lg font-light text-gray-800">
              <FaXmark />
              Free for personal use
            </li>
          </ul>
          <button className="border border-gray-300 rounded-lg py-3 font-medium bg-primary text-white">Read Docs</button>
        </div>
      </div>
    </section>
  );
};

export default Section04;
