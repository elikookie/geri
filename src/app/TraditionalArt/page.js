"use client";

import Menu from "../components/menu";
import { useRef } from "react";

const scrollToTop = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};

export default function Trad() {
  const start = useRef(null);
  return (
    <main>
      <div className="grid lg:grid-cols-4 gap-4">
        <Menu></Menu>
        <div class="lg:col-span-3">
          <div ref={start} className="flex flex-col bg-slate-100 p-20">
            <h1 className=" dm-serif-display-regular font-bold text-3xl text-center">
              Traditional Art
            </h1>
          </div>
          <p className="p-5 text-center lg:p-10">
            This is a collection of my favourite graphite pieces but way more
            can be found on my traditional art account (geri.archive). My love
            for drawing began with K-pop inspired fanart mostly but I eventually
            ventured into a bit more categories. It was mostly passion-driven by
            my own interests, not really professional drawing just yet :)
          </p>
          <div className="flex flex-col">
            <div className="lg:grid md:grid grid-cols-2">
              <div>
                <img className="p-5" src="/ta1.jpg"></img>
                <img className="p-5" src="/ta2.jpg"></img>
              </div>
              <div>
                <img className="p-5" src="/ta3.jpg"></img>
                <img className="p-5" src="/ta4.png"></img>
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
