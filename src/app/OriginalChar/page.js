"use client";

import Menu from "../components/menu";
import { useRef } from "react";

const scrollToTop = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};

export default function OC() {
  const start = useRef(null);
  return (
    <main>
      <div className="grid lg:grid-cols-4 gap-4">
        <Menu></Menu>
        <div class="lg:col-span-3">
          <div ref={start} className="flex flex-col bg-slate-100 p-20">
            <h1 className=" dm-serif-display-regular font-bold text-3xl text-center">
              Original Characters
            </h1>
          </div>
          <p className="p-5 text-center lg:p-10">
            My two official OCs are featured here and they are a mix of what I have
            been influenced by over the years. They hold very personal meaning
            to me and I had immense creative fun designing them over a few
            months. All rights are reserved to me and they are from my complete
            imagination
          </p>
          <div className="flex flex-col items-center">
            <div className="lg:grid md:grid grid-cols-2 ">
              <div>
                <img className="p-4 w-5/6" src="/oc1.png"></img>
              </div>
              <div>
                <img className="p-4 w-5/6" src="/oc2.png"></img>
              </div>
            </div>
            <img className="p-4 w-3/6" src="/oc3.png"></img>

            <button className="text-5xl" onClick={() => scrollToTop(start)}>
              ↑
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
