"use client";

import ImageModal from "../components/ImageModal";
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
      <div className="grid lg:grid-cols-4 gap-4">
        <Menu></Menu>
        <div class="lg:col-span-3">
          <div ref={start} className="flex flex-col bg-slate-100 p-20">
            <h1 className=" dm-serif-display-regular font-bold text-3xl text-center">
              Brand Identity - Travel Agency
            </h1>
          </div>
          <p className="p-5 text-center lg:p-10">
            For this one it was client business mock-up based. I ask what the
            client wants and I worked with the concept I was provided by them.
            They wanted something clean looking but also not too complex,
            representing the Earth&apos;s colours, as a symbol of being a
            nationwide company.
          </p>

          <div className="flex flex-col">
            <ImageModal
              className="p-10"
              src="/bi1.png"
              alt="Brand"
            />
            <ImageModal
              className="p-10"
              src="/bi2.png"
              alt="Brand"
            />
            <button className="text-5xl" onClick={() => scrollToTop(start)}>
              ↑
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
