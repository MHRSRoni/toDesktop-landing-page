import React from "react";

const CompanyCard = ({ img, name }) => {
  return (
    <div className="flex min-h-24 min-w-24 flex-col items-center justify-center gap-2 rounded-xl  border border-gray-300 bg-white md:min-h-32 md:min-w-32">
      <img src={img} className="w-12 h-12 md:w-16 md:h-16"/>
      <p className="text-[12px] font-semibold md:text-base">{name}</p>
    </div>
  );
};

export default CompanyCard;
