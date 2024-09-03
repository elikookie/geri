"use client";

import Menu from "../components/menu";
import { useRef } from "react";

const scrollToTop = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};

export default function Brand() {
  const start = useRef(null);
  return (
    <main>
      <div className="grid grid-cols-4 gap-4">
        <div class="col-span-1 p-10">
          <Menu></Menu>
        </div>
        <div class="col-span-3">
          <div ref={start} className="flex flex-col bg-slate-100 p-20">
            <h1 className=" dm-serif-display-regular font-bold text-3xl text-center">
              Brand Identity - Travel Agency
            </h1>
          </div>

          <div className="flex flex-col">
            <img className="p-10" src="/bi1.png"></img>
            <img className="p-10" src="/bi2.png"></img>
            <button className="text-5xl" onClick={() => scrollToTop(start)}>
              ↑
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
