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

export default function Digital() {
  const start = useRef(null);
  return (
    <main>
      <div className="grid lg:grid-cols-4 gap-4">
        <Menu></Menu>
        <div class="lg:col-span-3">
          <div ref={start} className="flex flex-col bg-slate-100 p-20">
            <h1 className=" dm-serif-display-regular font-bold text-3xl text-center">
              Digital Art
            </h1>
          </div>
          <p className="p-5 text-center lg:p-10">
            This is a collection of my favourite pieces, but way more be found
            on my digital art account (geri.0821). My digital art is mostly
            based on the Hoyoverse company video gacha games plus Kuro&apos;s as
            well, Anime and original pieces.
          </p>
          <div className="flex flex-col">
            <div className="lg:grid md:grid grid-cols-2">
              <div>
                <ImageModal
                  className="p-10"
                  src="/da1.png"
                  alt="Mavuika Genshin Impact"
                />
                <figcaption className="px-10">
                  Mavuika - Genshin Impact
                </figcaption>
                <ImageModal
                  className="p-10"
                  src="/da2.png"
                  alt="Robin Honkai Star Rail"
                />
                <figcaption className="px-10">
                  Robin - Honkai Star Rail
                </figcaption>
                <ImageModal
                  className="p-10"
                  src="/da5.png"
                  alt="Robin Boothill Honkai Star Rail"
                />
                <figcaption className="px-10">
                  Robin + Boothill - Honkai Star Rail
                </figcaption>
              </div>
              <div>
                <ImageModal
                  className="p-10"
                  src="/da3.png"
                  alt="Acheron Honkai Star Rail"
                />
                <figcaption className="px-10">
                  Acheron - Honkai Star Rail
                </figcaption>
                <ImageModal
                  className="p-10"
                  src="/da4.png"
                  alt="Douyin Girl Photo Study"
                />
                <figcaption className="px-10">
                  Douyin Girl Photo Study
                </figcaption>
                <ImageModal
                  className="p-10"
                  src="/da6.png"
                  alt="Blade Honkai Star Rail"
                />
                <figcaption className="px-10">
                  Yingxing/Blade - Honkai Star Rail
                </figcaption>
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
