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
          <p className="p-5 text-center lg:p-10">
            Tap into the mystery surrounding Alyssa! She is an orphan, a young
            girl that is supposedly being haunted by dark forces. Her cat Yuuna
            ,who is actually her guardian angel comes to the rescue and gets her
            out before it is too late...But does Yuuna manage to help Alyssa
            escape? Or was it all just an illusion...this is up to you to decide
            as you read through.
          </p>
          <div className="lg:grid md:grid grid-cols-2">
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
