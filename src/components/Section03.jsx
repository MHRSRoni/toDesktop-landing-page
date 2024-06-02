import assest44 from "@/assets/asset 32.svg";
import React from "react";
import { FaCheck, FaCode, FaDownload } from "react-icons/fa6";
const Section03 = () => {
  const data01 = [
    "Chromeless UI",
    "Native spellcheck",
    "Task time in menubar",
    "Notification count in the dock",
    "Global hotkey to create task",
  ];
  return (
    <section className="section container">
      <h2 className="mb-12 text-5xl font-semibold">Customer stories</h2>
      <div className="flex flex-col gap-4 rounded-xl border border-gray-300 lg:flex-row">
        <div className="flex flex-col gap-12  p-8">
          <img src={assest44} alt="" className="w-fit" />
          <p className="-mt-4 font-heading text-xl font-medium leading-relaxed text-gray-800">
            ClickUp used ToDesktop to get their desktop app in front of
            customers in days instead of months.
          </p>
          <ul className="flex flex-wrap gap-3 ">
            {data01.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 rounded-lg border border-yellow-300 bg-yellow-50 px-2 py-1 font-heading font-medium text-yellow-800"
              >
                <FaCheck />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg font-light text-gray-500 ">
            “ToDesktop provided us with a{" "}
            <span className="text-gray-800">polished desktop app</span> in no
            time. Their expert team guided us through a smooth migration from
            our outdated legacy desktop app, enabling us to deliver{" "}
            <span className="text-gray-800">new and improved features </span>
            to our customers within days.”
          </p>
          <div className="flex gap-4">
            <img
              src="src/assets/asset 33.jpeg"
              alt=""
              className="rounded-full"
            />
            <div className="flex flex-col ">
              <p className="font-heading font-medium text-gray-800">
                Zeb Evans
              </p>
              <p className="text-gray-500">Founder & CEO, ClickUp</p>
            </div>
          </div>
        </div>
        <div className="self-end pl-8">
          <img src="src/assets/asset 34.png" alt="" className="seld-end" />
        </div>
      </div>
      <div className="my-8 flex flex-col gap-4 lg:flex-row">
        <div className="color-card-outer group">
          <div className="color-card-inner flex flex-col gap-6 p-6">
            <div className="flex items-center gap-4">
              <div className="w-fit rounded-full bg-blue-200 p-4">
                <FaCode className="text-xl text-indigo-800" />
              </div>
              <p className="font-heading text-2xl font-semibold text-gray-800">
                Native APIs
              </p>
            </div>
            <p className="text-lg font-light text-gray-800">
              What sets ToDesktop apart is its seamless integration with native
              APIs using our existing web codebase. By tapping into APIs like
              Tray and Notifications, we've crafted an exceptionally polished
              desktop user experience.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border">
                  <img
                    src="src/assets/asset 35.png"
                    alt=""
                    className="min-h-16 min-w-16"
                  />
                </div>
                <div className="h-12 w-12 -translate-x-2 overflow-hidden rounded-full border border-white">
                  <img
                    src="src/assets/asset 36.jpeg"
                    alt=""
                    className="h-12 w-12 rounded-full"
                  />
                </div>
              </div>
              <div>
                <p className="font-heading font-medium text-gray-800">
                  Rick Pastoor
                </p>
                <p className="anchor-link w-fit text-gray-500">Rise</p>
              </div>
            </div>
          </div>
        </div>
        <div className="color-card-outer group">
          <div className="color-card-inner flex flex-col gap-6 p-6">
            <div className="flex items-center gap-4">
              <div className="w-fit rounded-full bg-blue-200 p-4">
                <FaCode className="text-xl text-indigo-800" />
              </div>
              <p className="font-heading text-2xl font-semibold text-gray-800">
                Native APIs
              </p>
            </div>
            <p className="text-lg font-light text-gray-800">
              What sets ToDesktop apart is its seamless integration with native
              APIs using our existing web codebase. By tapping into APIs like
              Tray and Notifications, we've crafted an exceptionally polished
              desktop user experience.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border">
                  <img
                    src="src/assets/asset 35.png"
                    alt=""
                    className="min-h-16 min-w-16"
                  />
                </div>
                <div className="h-12 w-12 -translate-x-2 overflow-hidden rounded-full border border-white">
                  <img
                    src="src/assets/asset 36.jpeg"
                    alt=""
                    className="h-12 w-12 rounded-full"
                  />
                </div>
              </div>
              <div>
                <p className="font-heading font-medium text-gray-800">
                  Rick Pastoor
                </p>
                <p className="anchor-link w-fit text-gray-500">Rise</p>
              </div>
            </div>
          </div>
        </div>
        <div className="color-card-outer group">
          <div className="color-card-inner flex flex-col gap-6 p-6">
            <div className="flex items-center gap-4">
              <div className="w-fit rounded-full bg-blue-200 p-4">
                <FaCode className="text-xl text-indigo-800" />
              </div>
              <p className="font-heading text-2xl font-semibold text-gray-800">
                Native APIs
              </p>
            </div>
            <p className="text-lg font-light text-gray-800">
              What sets ToDesktop apart is its seamless integration with native
              APIs using our existing web codebase. By tapping into APIs like
              Tray and Notifications, we've crafted an exceptionally polished
              desktop user experience.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border">
                  <img
                    src="src/assets/asset 35.png"
                    alt=""
                    className="min-h-16 min-w-16"
                  />
                </div>
                <div className="h-12 w-12 -translate-x-2 overflow-hidden rounded-full border border-white">
                  <img
                    src="src/assets/asset 36.jpeg"
                    alt=""
                    className="h-12 w-12 rounded-full"
                  />
                </div>
              </div>
              <div>
                <p className="font-heading font-medium text-gray-800">
                  Rick Pastoor
                </p>
                <p className="anchor-link w-fit text-gray-500">Rise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-xl bg-black text-gray-400 lg:flex-row mt-12 pt-12">
        <div className="flex flex-col gap-4 lg:gap-8 p-8  lg:flex-1">
          <p className=" font-heading font-medium">READY TO START BUILDING?</p>
          <h3 className=" text-4xl leading-tight text-white lg:text-5xl ">
            Create your desktop app for free*
          </h3>
          <p className="text-lg font-light lg:text-xl">
            ToDesktop Builder will take you step-by-step through the process of
            creating your first desktop app in just a few minutes.
          </p>
          <button className="flex items-center justify-center gap-4 rounded-lg bg-primary py-3 text-white hover:opacity-90">
            <FaDownload />
            Download ToDesktop Builder
          </button>
          <p className="text-xs italic">
            *You can create a desktop app and run it on your computer for free.
            You will only be charged if you want to create a distributable app
            for your customers.
          </p>
        </div>
        <div className="lg:flex-1">
          <img src="src/assets/asset 34.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section03;
