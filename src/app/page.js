import Menu from "./components/menu";
import InstagramPhotos from "./components/InstagramPhotos";

const mediaItems = [
  {
    id: '18009399227370039',
    media_type: 'IMAGE',
    media_url: 'https://scontent.cdninstagram.com/v/t51.29350-15/457529061_399404556177926_7585188319839227851_n.webp?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=J6CrKJjlCfoQ7kNvgGMkX9M&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&_nc_gid=AKh8laEAiMc6tmP4z75lTmM&oh=00_AYCcFTYJnbSZbXbZO0JZmygZc_6TJiJkfgM1KSjqzTGvaQ&oe=66DD21F5',
    username: 'geri.0821',
    timestamp: '2024-09-02T15:02:03+0000'
  },
  {
    id: '17863380507206365',
    media_type: 'IMAGE',
    media_url: 'https://scontent.cdninstagram.com/v/t51.29350-15/456833743_359437577100953_7101427401438665983_n.webp?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=WyUt-szuNcUQ7kNvgEXL7tz&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AYBs3pJtjY_ileaGKT4W7lcj5dolRRfYEpL2_NjZbJ_EmQ&oe=66DD2DC9',
    username: 'geri.0821',
    timestamp: '2024-08-24T15:06:09+0000'
  },
  {
    id: '18023176178142192',
    media_type: 'IMAGE',
    media_url: 'https://scontent.cdninstagram.com/v/t51.29350-15/456574614_1574359213433050_6608600386046417652_n.webp?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=_4ZzRLTfowgQ7kNvgGrPHrY&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AYCNpBZjHCSDYaCYP8cGIp_VebhoiQnBpIPb1JQW17HILQ&oe=66DD28EC',
    username: 'geri.0821',
    timestamp: '2024-08-21T15:30:32+0000'
  },
  {
    id: '18097900042439818',
    media_type: 'IMAGE',
    media_url: 'https://scontent.cdninstagram.com/v/t51.29350-15/455157767_1032253808295315_6747064333880680368_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=iPVJv_eibTUQ7kNvgFg2DeJ&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AYB8R53N7H7GidYAFFpmKohbFRgsjeu8EWKfmvbn_m6EnQ&oe=66DD335B',
    username: 'geri.0821',
    timestamp: '2024-08-14T13:54:51+0000'
  },
  {
    id: '17851538052253641',
    media_type: 'IMAGE',
    media_url: 'https://scontent.cdninstagram.com/v/t51.29350-15/454301473_1911886775982317_6977309640214529533_n.webp?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=x_8FTaQbfaUQ7kNvgFefad3&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&_nc_gid=A0T44KCZWjEnTxn_w9xYdV6&oh=00_AYAYibDxnwboDf3osfrB6Ez3JCV5qCzi_MpPRb2BsPjfmQ&oe=66DD1F0A',
    username: 'geri.0821',
    timestamp: '2024-08-06T15:02:57+0000'
  }
];

export default function Home() {
  return (
    <main>
      <div className="grid lg:grid-cols-4 gap-4">
        <Menu></Menu>
        <div class="lg:col-span-3">
          <div className="flex flex-col bg-slate-100 p-5 lg:px-20 pt-20 pb-5">
            <p className="tinos-bold text-xl text-center lg:p-10">
              Hi, my name is Gergana Koleva (Geri) and I am a self-taught
              artist. I have been passionate about art since 2016 and have been
              practising digital illustration as well as graphite pencil
              drawings as my faundation. I am also currently interested in
              graphic design.
            </p>
            <br></br>
            <p className="tinos-regular text-lg text-center">
              Have a look at my instagram accounts for more of my art:
            </p>

            <div className="flex flex-col lg:flex-row lg:justify-evenly">
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
          <div className="flex flex-col bg-white">
            <h1 className="text-3xl font-bold text-center my-8">
              Instagram Media Gallery
            </h1>
            <InstagramPhotos mediaItems={mediaItems} />
          </div>
        </div>
      </div>
    </main>
  );
}
