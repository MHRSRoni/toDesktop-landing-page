import React from "react"; 
import asset28 from "/src/assets/asset 28.png"
import asset29 from "/src/assets/asset 29.png"
import asset30 from "/src/assets/asset 30.png"
import asset31 from "/src/assets/asset 31.png"
const Section02 = () => {
  return (
    <section className="section container flex flex-col gap-8">
      <h3 className="max-w-2xl text-5xl mb-12">ToDesktop handles the details</h3>
      <div
        className="flex flex-col gap-6 lg:grid lg:grid-cols-3"
        style={{ gridAutoRows: "96px" }}
      >
        <div
          data-role="card"
          className="group flex rounded-xl bg-slate-100 p-[1px] hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 lg:row-start-1 lg:row-end-3"
        >
          <div
            data-role="card-content"
            className="flex flex-1 flex-col h-full items-center  gap-8 rounded-xl border border-gray-300 bg-gray-50 p-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50"
          >
            <h6 className="font-heading text-2xl ">Native Notifications</h6>
            <img src={asset28} alt="" />
          </div>
        </div>
        <div
          data-role="card"
          className="group flex rounded-xl bg-slate-100 p-[1px] hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 lg:row-start-1 lg:row-end-4 "
        >
          <div
            data-role="card-content"
            className="flex flex-1 flex-col h-full items-center  gap-8 rounded-xl border border-gray-300 bg-gray-50 p-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50"
          >
            <h6 className="font-heading text-2xl ">Native Notifications</h6>
            <p className="text-lg font-light">
              We’ll ensure the underlying browser is up to date and deliver
              performance improvements, security patches, & additional features.
            </p>
            <img src={asset29} alt="" />
          </div>
        </div>
        <div
          data-role="card"
          className="group flex rounded-xl bg-slate-100 p-[1px] hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 lg:row-start-1 lg:row-end-3"
        >
          <div
            data-role="card-content"
            className="flex flex-1 flex-col h-full items-center  gap-8 rounded-xl border border-gray-300 bg-gray-50 p-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50"
          >
            <h6 className="font-heading text-2xl ">Native Notifications</h6>

            <img src={asset30} alt="" />
          </div>
        </div>
        <div
          data-role="card"
          className="group flex rounded-xl bg-slate-100 p-[1px] hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 lg:row-start-3 lg:row-end-6"
        >
          <div
            data-role="card-content"
            className="flex flex-1 flex-col h-full items-center  gap-8 rounded-xl border border-gray-300 bg-gray-50 p-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50"
          >
            <h6 className="font-heading text-2xl ">Native Notifications</h6>
            <p className="text-lg font-light">
              We’ll ensure the underlying browser is up to date and deliver
              performance improvements, security patches, & additional features.
            </p>
            <img src={asset31} alt="" />
          </div>
        </div>
        <div
          data-role="card"
          className="group flex rounded-xl bg-slate-100 p-[1px] hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 lg:row-start-4 lg:row-end-6"
        >
          <div
            data-role="card-content"
            className="flex flex-1 flex-col h-full items-center  gap-8 rounded-xl border border-gray-300 bg-gray-50 p-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50"
          >
            <h6 className="font-heading text-2xl ">Native Notifications</h6>
            <img src={asset28} alt="" />
          </div>
        </div>
        <div
          data-role="card"
          className="group flex rounded-xl bg-slate-100 p-[1px] hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 lg:row-start-3 lg:row-end-6"
        >
          <div
            data-role="card-content"
            className="flex flex-1 flex-col h-full items-center  gap-8 rounded-xl border border-gray-300 bg-gray-50 p-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50"
          >
            <h6 className="font-heading text-2xl ">Native Notifications</h6>
            <p className="text-lg font-light">
              We’ll ensure the underlying browser is up to date and deliver
              performance improvements, security patches, & additional features.
            </p>
            <img src={asset29} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section02;
