import Menu
 from "./components/menu";
export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-4 gap-4">
        <div class="col-span-1 p-10">
         <Menu></Menu>
        </div>
        <div class="col-span-3">
          <div className="flex flex-col bg-slate-100 px-20 pt-20 pb-5">
            <p className="tinos-bold text-xl text-center p-10">
              Hi, my name is Gergana Koleva (Geri) and I am a self-taught
              artist. I have been passionate about art since 2016 and have been
              practising digital illustration as well as graphite pencil
              drawings as my faundation. I am also currently interested in
              graphic design.
            </p>
            <p className="tinos-regular text-lg text-center">
              Have a look at my instagram accounts for more of my art:
            </p>

            <div className="flex flex-row justify-evenly">
              <a
                className="flex items-center"
                href="https://www.instagram.com/geri.0821/"
              >
                <img className="m-5 w-16" src="instagram.png"></img>
                <div>
                  <p>@geri.0821</p>
                  <p>(Digital Art Account)</p>
                </div>
              </a>

              <a
                className="flex items-center"
                href="https://www.instagram.com/geri.archive/"
              >
                <img className="m-5 w-16" src="instagram.png"></img>
                <div>
                  <p>@geri.archive</p>
                  <p>(Traditional Art Account)</p>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
