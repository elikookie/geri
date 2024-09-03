"use client";

import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="lg:col-span-1 p-10">
      <button className="p-2 lg:hidden" onClick={toggleMenu}>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <div
        className={`fixed inset-0 bg-white p-6 z-30 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:block lg:bg-transparent lg:p-0`}
      >
        {/* Close Button (Visible only on smaller screens) */}
        <button
          className="absolute top-4 right-4 p-2 lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <Link href="/">
          <img className="w-64" src="logo.png"></img>
        </Link>

        <p className="font-bold">Contact me</p>
        <hr className="p-2"></hr>

        <Link className="hover:underline" href="/Contact">
          Contact Info
        </Link>

        <p className="font-bold pt-5">Work</p>
        <hr className="p-2"></hr>

        <ul className="flex flex-col space-y-3">
          <li>
            <Link className="hover:underline" href="/DigitalArt">
              Digital Art
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/TraditionalArt">
              Traditional Art
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/OriginalChar">
              Original Characters
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/Psycho">
              Psychotypography Collages
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/PenguinBookCoverMockUps">
              Penguin Book Cover Mock Ups
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/CoffeeCartonPackaging">
              Coffee Carton Packaging
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/BATA">
              Brand Identity - Travel Agency
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/PoetryPostersSeries">
              Poetry Posters Series
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/LetterVisuals">
              Postcard Letter Visuals
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/HorrorThemedZine">
              Horror Themed Zine
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/ZineLiveEx">
              Slice of Life Zine + Live Exhibition
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
