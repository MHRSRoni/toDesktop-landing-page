import React from "react";
import { FaCheck } from "react-icons/fa6";
import StepButton from "./StepButton";
import asset27 from '/src/assets/asset 27.svg'
const Section01 = () => {
  return (
    <section data-role="section01" className="section container mt-32">
      <h2 className="text-5xl mb-14">How it works</h2>
      <div className="flex flex-col gap-6">
        {["Step 1", "Step 2", "Step 3"].map((step, index) => (
          <div
            key={index}
            data-role={step}
            className="flex flex-1 flex-col justify-between gap-8 rounded-xl border border-gray-300 px-8 py-12 lg:flex-row"
          >
            <div className="flex flex-col gap-6 lg:w-1/2">
              <StepButton text={step} />
              <h3 className="text-4xl">Bootstrap straight from your web app</h3>
              <p className="text-lg font-light text-gray-500">
                Copy and paste your web app url into ToDesktop. Customise your
                app design, app icon and window frame UI with no code.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-lg font-light text-gray-500">
                  <FaCheck />
                  <span className="border-b border-black border-opacity-30 hover:border-opacity-80">
                    Muliple Windows
                  </span>
                </li>
                <li className="flex items-center gap-2 text-lg font-light text-gray-500">
                  <FaCheck />
                  <span className="border-b border-black border-opacity-30 hover:border-opacity-80">
                    Muliple Windows
                  </span>
                </li>
                <li className="flex items-center gap-2 text-lg font-light text-gray-500">
                  <FaCheck />
                  <span className="border-b border-black border-opacity-30 hover:border-opacity-80">
                    Muliple Windows
                  </span>
                </li>
                <li className="flex items-center gap-2 text-lg font-light text-gray-500">
                  <FaCheck />
                  <span className="border-b border-black border-opacity-30 hover:border-opacity-80">
                    Muliple Windows
                  </span>
                </li>
                <li className="flex items-center gap-2 text-lg font-light text-gray-500">
                  <FaCheck />
                  <span className="border-b border-black border-opacity-30 hover:border-opacity-80">
                    Muliple Windows
                  </span>
                </li>
                <li className="flex items-center gap-2 text-lg font-light text-gray-500">
                  <FaCheck />
                  <span className="border-b border-black border-opacity-30 hover:border-opacity-80">
                    Muliple Windows
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 pt-12 lg:w-1/2 lg:justify-end justify-center">
              <img src={asset27} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section01;
