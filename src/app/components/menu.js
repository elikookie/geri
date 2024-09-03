import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <Link href="/">
        <img className="w-64" src="logo.png"></img>
      </Link>

      <p className="font-bold">Work</p>
      <hr className="p-2"></hr>
      <ul className="flex flex-col space-y-3">
        <li>
          <Link href="/DigitalArt">Digital Art</Link>
        </li>
        <li>
          <Link href="/TraditionalArt">Traditional Art</Link>
        </li>
        <li>
          <Link href="/OriginalChar">Original Charachters</Link>
        </li>
        <li>
          <Link href="/HorrorThemedZine">Horror Themed Zine</Link>
        </li>
        <li>
          <Link href="/ZineLiveEx">Zine + Live Exhibition</Link>
        </li>
        <li>
          <Link href="/Pshycho">Psychotryography Collages</Link>
        </li>
        <li>
          <Link href="/CoffeeCartonPackaging">Coffee Carton Packaging</Link>
        </li>
        <li>
          <Link href="/BATA">Brand Identity - Travel Agency</Link>
        </li>
        <li>
          <Link href="/PenguinBookCoverMockUps">
            Penguin Book Cover Mock Ups
          </Link>
        </li>
        <li>
          <Link href="/PoetryPostersSeries">Poetry Posters Series</Link>
        </li>
        <li>
          <Link href="/LetterVisuals">Letter Visuals</Link>
        </li>
      </ul>
    </div>
  );
}
