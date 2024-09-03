import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="col-span-1 lg:p-10">
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
        className={` 
        ${isOpen ? "block" : "hidden"} lg:block`}
      >
        <Link href="/">
          <img className="w-64" src="logo.png"></img>
        </Link>

        <p className="font-bold">Work</p>
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
              Original Charachters
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/Pshycho">
              Psychotryography Collages
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
              Letter Visuals
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/HorrorThemedZine">
              Horror Themed Zine
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/ZineLiveEx">
              Zine + Live Exhibition
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
