import React from "react";

const StepButton = ({ text }) => {
  return (
    <p className="rounded-lg border border-yellow-300 bg-yellow-50 px-3 py-1 font-heading font-medium text-yellow-800 w-fit ">
      {text}
    </p>
  );
};

export default StepButton;
