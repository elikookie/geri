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

export default function OC() {
  const start = useRef(null);
  return (
    <main>
      <div className="grid lg:grid-cols-4 gap-4">
        <Menu></Menu>
        <div className="lg:col-span-3">
          <div ref={start} className="flex flex-col bg-slate-100 p-10 lg:p-20">
            <h1 className="dm-serif-display-regular font-bold text-3xl text-center">
              Original Characters
            </h1>
          </div>
          <p className="p-5 text-center lg:p-10">
            My two official OCs are featured here and they are a mix of what I
            have been influenced by over the years. They hold very personal
            meaning to me and I had immense creative fun designing them over a
            few months. All rights are reserved to me and they are from my
            complete imagination.
          </p>
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              <div className="flex flex-col items-center">
                <ImageModal
                  className="p-4 w-4/5 lg:w-full"
                  src="/oc1.png"
                  alt="OC1"
                />
                <ImageModal
                  className="p-4 w-4/5 lg:w-full"
                  src="/oc4.png"
                  alt="OC4"
                />
              </div>
              <div className="flex flex-col items-center">
                <ImageModal
                  className="p-4 w-4/5 lg:w-full"
                  src="/oc2.png"
                  alt="OC2"
                />
                <ImageModal
                  className="p-4 w-4/5 lg:w-full"
                  src="/oc5.png"
                  alt="OC5"
                />
              </div>
            </div>
            <ImageModal
              className="p-4 w-4/5 lg:w-2/3 mt-6"
              src="/oc3.png"
              alt="OC3"
            />

            <button
              className="text-5xl mt-10 p-2"
              onClick={() => scrollToTop(start)}
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
