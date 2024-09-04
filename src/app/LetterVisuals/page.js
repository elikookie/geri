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

export default function Letter() {
  const start = useRef(null);
  return (
    <main>
      <div className="grid lg:grid-cols-4 gap-4">
        <Menu></Menu>
        <div class="lg:col-span-3">
          <div ref={start} className="flex flex-col bg-slate-100 p-20">
            <h1 className=" dm-serif-display-regular font-bold text-3xl text-center">
              Postcard Letter Visuals
            </h1>
          </div>
          <p className="p-5 text-center lg:p-10">
            These are postcards with an original letter visual; the
            &apos;G&apos; being a part of my name. Something I messed around
            with to get my senses going, no particular meaning :)
          </p>
          <div className="flex flex-col items-center mt-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <ImageModal
                className="p-2 w-full max-w-xs lg:max-w-sm"
                src="/pcv1.png"
                alt="Postcard 1"
              />
              <ImageModal
                className="p-2 w-full max-w-xs lg:max-w-sm"
                src="/pcv2.png"
                alt="Postcard 2"
              />
              <ImageModal
                className="p-2 w-full max-w-xs lg:max-w-sm"
                src="/pcv3.png"
                alt="Postcard 3"
              />
              <ImageModal
                className="p-2 w-full max-w-xs lg:max-w-sm"
                src="/pcv4.png"
                alt="Postcard 4"
              />
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
