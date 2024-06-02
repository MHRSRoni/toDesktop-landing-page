import line from "@/datas/line.json";
import React, {useRef} from "react";
import { useLineMoving } from "../hooks/useLineMoving";
const Line = () => {
    const lineEl = useRef(null)
    const [style] = useLineMoving(lineEl, true, 0.6, -48 * 4);
  return (
    <section className="section container my-8">
      <div className="rounded-xl border border-gray-300 px-8 py-10 overflow-hidden">
        <div className="flex items-center justify-center gap-8 -translate-x-48" ref={lineEl} style={style}>
          {line.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-8 whitespace-nowrap  last:hidden"
              
            >
              <h3 className="text-2xl font-semibold leading-7">{item}</h3>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Line;
