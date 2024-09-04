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
              Contact me :)
            </h1>
          </div>
          <ul className="p-5">
            <li className="p-5 underline"> 
              <a href="https://geri0821.carrd.co/">
                Illustration Commission Info
              </a>
            </li>
            <li className="p-5 underline">
              <a href="https://ko-fi.com/geri0821/">
                Cheap Lineart commissions + tip me
              </a>
            </li>
            <li className="p-5 underline">
              <a href="http://www.linkedin.com/in/gergana-koleva-b7b212223/">
                LinkedIn Profile
              </a>
            </li>
            <li className="p-5">
              <p>Business Email: gkoleva03@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
