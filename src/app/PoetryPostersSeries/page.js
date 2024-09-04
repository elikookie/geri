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

export default function Poetry() {
  const start = useRef(null);
  return (
    <main>
      <div className="grid lg:grid-cols-4 gap-4">
        <Menu></Menu>
        <div class="lg:col-span-3">
          <div ref={start} className="flex flex-col bg-slate-100 p-20">
            <h1 className=" dm-serif-display-regular font-bold text-3xl text-center">
              Poetry Posters Series
            </h1>
          </div>
          <p className="p-5 text-center lg:p-10">
            A series of Typographic posters for a poetry mockup reading event
            inspired by poems of different poets that I really enjoy. They
            represent how I would imagine the most important elements of the
            poems themselves.
          </p>
          <div className="flex flex-col items-center">
            <div className="lg:grid md:grid grid-cols-3 gap-2 place-content-center ">
              <div>
                <ImageModal
                  className=""
                  src="/post1.png"
                  alt="Poster 1"
                />
              </div>
              <div>
                <ImageModal
                  className=""
                  src="/post2.png"
                  alt="Poster 2"
                />{" "}
              </div>
              <div>
                <ImageModal
                  className=""
                  src="/post3.png"
                  alt="Poster 3"
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
