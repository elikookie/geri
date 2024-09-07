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

export default function Axis() {
  const start = useRef(null);
  return (
    <main>
      <div className="grid lg:grid-cols-4 gap-4">
        <Menu></Menu>
        <div class="lg:col-span-3">
          <div ref={start} className="flex flex-col bg-slate-100 p-20">
            <h1 className=" dm-serif-display-regular font-bold text-3xl text-center">
              AXIS Model Management Poster Promotion
            </h1>
          </div>
          <p className="p-5 text-center lg:p-10">
            This is poster concepts I did for the model management company AXIS,
            to promote an upcoming launch party event. It was all created with
            the say of the client and I designed it with the vision they gave
            me. It&apos;s meant to be futuristic with a clean design.
          </p>
          <div className="flex flex-col">
            <div className="lg:grid md:grid grid-cols-2">
              <div>
                <ImageModal
                  className="p-10"
                  src="/ax1.png"
                  alt="Axis Model Poster 1"
                />
                <ImageModal
                  className="p-10"
                  src="/ax2.jpg"
                  alt="Axis Model Poster 2"
                />
              </div>
              <div>
                <ImageModal
                  className="p-10"
                  src="/ax3.jpg"
                  alt="Axis Model Poster 3"
                />
                <ImageModal
                  className="p-10"
                  src="/ax4.png"
                  alt="Axis Model Poster 4"
                />
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
