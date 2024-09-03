"use client";

import Menu from "../components/menu";
import { useRef } from "react";

const scrollToTop = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};

export default function Coffee() {
  const start = useRef(null);
  return (
    <main>
      <div className="grid lg:grid-cols-4 gap-4">
        <Menu></Menu>
        <div class="lg:col-span-3">
          <div ref={start} className="flex flex-col bg-slate-100 p-20">
            <h1 className=" dm-serif-display-regular font-bold text-3xl text-center">
              Coffee Carton Packaging
            </h1>
          </div>

          <p className="p-5 text-center lg:p-10">
            An original redesign of a Nescafé Coffee Box with my own flavour. I
            wanted it to look playful and lighthearted due to the high sugar
            rush flavour and perhaps indulging my own imagination.
          </p>
          <div className="flex flex-col">
            <img
              className="p-10"
              src="/coffee.png"
              alt="Horror themed zine"
            ></img>
            <button className="text-5xl" onClick={() => scrollToTop(start)}>
              ↑
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
