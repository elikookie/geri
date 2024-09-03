"use client";

import Menu from "../components/menu";
import { useRef } from "react";

const scrollToTop = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};

export default function LiveEx() {
  const start = useRef(null);
  return (
    <main>
      <div className="grid lg:grid-cols-4 gap-4">
        <Menu></Menu>
        <div class="lg:col-span-3">
          <div ref={start} className="flex flex-col bg-slate-100 p-20">
            <h1 className=" dm-serif-display-regular font-bold text-3xl text-center">
              Zine + Live Exhibition
            </h1>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-2">
              <div>
                <img
                  className="p-10"
                  src="/finalzine.png"
                  alt="Horror themed zine"
                ></img>
              </div>
              <div>
                <img
                  className="p-10"
                  src="/lifeex.jpg"
                  alt="Horror themed OC"
                ></img>
              </div>
            </div>

            <button className="text-5xl" onClick={() => scrollToTop(start)}>
              ↑
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
