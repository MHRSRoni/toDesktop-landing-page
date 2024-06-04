import classNames from "classnames";
import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

const Accordion = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-8 rounded-lg border bg-slate-50 p-6">
      <h6
        className="flex items-center justify-between  text-lg font-semibold"
        onClick={() => setOpen(open => !open)}
      >
        Is ToDesktop For Me?{" "}
        <FaChevronUp className={classNames({ "rotate-180": !open })} />
      </h6>
      {open && (
        <p className="text-lg font-light">
          That depends! If you would like to distribute your web app to your
          users as a downloadable desktop app then ToDesktop is for you.
        </p>
      )}
    </div>
  );
};

export default Accordion;
