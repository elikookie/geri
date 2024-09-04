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

export default function Psycho() {
  const start = useRef(null);
  return (
    <main>
      <div className="grid lg:grid-cols-4 gap-4">
        <Menu></Menu>
        <div class="lg:col-span-3">
          <div ref={start} className="flex flex-col bg-slate-100 p-20">
            <h1 className=" dm-serif-display-regular font-bold text-3xl text-center">
              Psychotypography Collages
            </h1>
          </div>
          <p className="p-5 text-center lg:p-10">
            Psychotypography describes the effect of the typographic environment
            on the emotions and behaviour of individuals. These are photographs
            gathered by me and they depict the emotions I felt while taking them
            during my outing. More info can be found on
            https://www.psychotypography.com/
          </p>

          <div className="flex flex-col">
            <div className="lg:grid md:grid-cols-2">
              <div>
              <ImageModal
                  className="p-10"
                  src="/p1.png"
                  alt="Psychotypography Collage 1"
                />
              </div>
              <div>
              <ImageModal
                  className="p-10"
                  src="/p2.png"
                  alt="Psychotypography Collage 1"
                />              </div>
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
