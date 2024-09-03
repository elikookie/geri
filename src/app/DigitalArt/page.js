"use client";

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
                <img className="p-5" src="/da1.png"></img>
                <figcaption>Mavuika - Genshin Impact</figcaption>
                <img className="p-5" src="/da2.png"></img>
                <figcaption>Robin - Honkai Star Rail</figcaption>
              </div>
              <div>
                <img className="p-5" src="/da3.png"></img>
                <figcaption>Acheron  - Honkai Star Rail</figcaption>
                <img className="p-5" src="/da4.png"></img>
                <figcaption>Douyin Girl Photo Study</figcaption>
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
