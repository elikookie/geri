"use client";

import Menu from "../components/menu";
import { useRef } from "react";

const scrollToTop = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};

export default function Book() {
  const start = useRef(null);
  return (
    <main>
      <div className="grid lg:grid-cols-4 gap-4">
        <Menu></Menu>
        <div class="lg:col-span-3">
          <div ref={start} className="flex flex-col bg-slate-100 p-20">
            <h1 className=" dm-serif-display-regular font-bold text-3xl text-center">
              Penguin Book Cover Mock Ups
            </h1>
          </div>
          <p className="p-5 text-center lg:p-10">
            These were a series of book covers under one theme, which was
            Merry-Go-Round of Life. It depicted characters that found themselves
            lost in unknown situations and being challenged to find their way
            out in the most unexpected of ways. The logo accompanying them
            represents exactly that. The sun being the bright side of things,
            but the zigzag lines are the hidden &quot;thorns/vines&quot; or the evil so to
            speak entangled in this whole adventure.
          </p>
          <div className="flex flex-col">
            <div className="lg:grid md:grid grid-cols-2">
              <div>
                <img src="/bc1.png"></img>
                <img src="/bc2.png"></img>
              </div>
              <div>
                <img src="/bc3.png"></img>
                <img src="/bc4.png"></img>
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
