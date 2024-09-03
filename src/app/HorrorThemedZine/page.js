"use client";

import Menu from "../components/menu";
import { useRef } from "react";

const scrollToTop = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};

export default function HorrorThemedZine() {
  const start = useRef(null);
  return (
    <main>
      <div className="grid lg:grid-cols-4 gap-4">
        <Menu></Menu>
        <div class="lg:col-span-3 flex flex-col">
          <div ref={start} className="flex flex-col bg-slate-100 p-20">
            <h1 className=" dm-serif-display-regular font-bold text-3xl text-center">
              Horror Themed Zine
            </h1>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <img
                className="p-10"
                src="/alyssaA3-1.png"
                alt="Horror themed zine"
              ></img>
            </div>
            <div>
              <img
                className="p-10"
                src="/alyssa.jpg"
                alt="Horror themed OC"
              ></img>
            </div>
          </div>
          <button className="text-5xl p-5" onClick={() => scrollToTop(start)}>
            ↑
          </button>
        </div>
      </div>
    </main>
  );
}
