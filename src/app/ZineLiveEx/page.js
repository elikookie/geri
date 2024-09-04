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

export default function LiveEx() {
  const start = useRef(null);
  return (
    <main>
      <div className="grid lg:grid-cols-4 gap-4">
        <Menu></Menu>
        <div class="lg:col-span-3">
          <div ref={start} className="flex flex-col bg-slate-100 p-20">
            <h1 className=" dm-serif-display-regular font-bold text-3xl text-center">
              Slice of Life Zine + Live Exhibition
            </h1>
          </div>
          <p className="p-5 text-center lg:p-10">
            This is a zine based on a story about a couple arguing about what to
            do on holidays and what actually matters the most. Their quality
            time together or how boujee it is? And on the other side you can see
            how it was exhibited in my college!
          </p>

          <div className="flex flex-col">
            <div className="lg:grid md:grid grid-cols-2">
              <div>
                <ImageModal
                  src="/finalzine.png"
                  alt="Slice of life zine"
                  className="p-10"
                />
              </div>
              <div>
                <ImageModal
                  className="p-10"
                  src="/lifeex.jpg"
                  alt="Live Exhibition"
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
