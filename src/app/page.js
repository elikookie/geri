import Menu from "./components/menu";
import InstagramPhotos from "./components/InstagramPhotos";

const mediaItems = [
  {
    id: '17959083890688815',
    media_type: 'VIDEO',
    media_url: 'https://instagram.fdub1-4.fna.fbcdn.net/o1/v/t16/f1/m86/E04E7FCF8AF908F83814799B5B031D90_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=instagram.fdub1-4.fna.fbcdn.net&_nc_cat=111&vs=7cd900fc1079f01c&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9FMDRFN0ZDRjhBRjkwOEY4MzgxNDc5OUI1QjAzMUQ5MF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dFV0pSQnZJaVlfM2dkMEJBQ2dCT214ckhsVlFicV9FQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJqL5hpvro9sBFQIoAkMzLBdAHd0vGp%2B%2BdxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&ccb=9-4&oh=00_AYBTm8RM9qOS014XvilBzD5H2RwF1i3vbv_Nr4nWY7oLeQ&oe=66D932C7&_nc_sid=1d576d',
    username: 'geri.0821',
    timestamp: '2024-09-03T13:42:25+0000'
  },
  {
    id: '18009399227370039',
    media_type: 'IMAGE',
    media_url: 'https://scontent.cdninstagram.com/v/t51.29350-15/457529061_399404556177926_7585188319839227851_n.webp?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=J6CrKJjlCfoQ7kNvgGMkX9M&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&_nc_gid=AKh8laEAiMc6tmP4z75lTmM&oh=00_AYCcFTYJnbSZbXbZO0JZmygZc_6TJiJkfgM1KSjqzTGvaQ&oe=66DD21F5',
    username: 'geri.0821',
    timestamp: '2024-09-02T15:02:03+0000'
  },
  {
    id: '18156035830317023',
    media_type: 'VIDEO',
    media_url: 'https://instagram.fdub1-4.fna.fbcdn.net/o1/v/t16/f1/m86/2849F1805E691BC0202E8EAA1689EEB3_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=instagram.fdub1-4.fna.fbcdn.net&_nc_cat=102&vs=ba1134a1d286a58e&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8yODQ5RjE4MDVFNjkxQkMwMjAyRThFQUExNjg5RUVCM192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dIc0FReHUtWmlfbTk1RU5BQ0poUm9wVmE0SUNicV9FQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJs6th96atNwBFQIoAkMzLBdAJAAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&ccb=9-4&oh=00_AYC-lfp8BXIp2K-y0gUVTlQoB8jdOkQaoWOzeN5gO-nDNw&oe=66D935D0&_nc_sid=1d576d',
    username: 'geri.0821',
    timestamp: '2024-08-29T13:03:16+0000'
  },
  {
    id: '17863380507206365',
    media_type: 'IMAGE',
    media_url: 'https://scontent.cdninstagram.com/v/t51.29350-15/456833743_359437577100953_7101427401438665983_n.webp?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=WyUt-szuNcUQ7kNvgEXL7tz&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AYBs3pJtjY_ileaGKT4W7lcj5dolRRfYEpL2_NjZbJ_EmQ&oe=66DD2DC9',
    username: 'geri.0821',
    timestamp: '2024-08-24T15:06:09+0000'
  },
  {
    id: '17943436607848057',
    media_type: 'VIDEO',
    media_url: 'https://instagram.fdub1-4.fna.fbcdn.net/o1/v/t16/f1/m86/9B47E2946CF1B8E19AA1C646940051AF_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=instagram.fdub1-4.fna.fbcdn.net&_nc_cat=109&vs=704792b4b0a90c1d&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC85QjQ3RTI5NDZDRjFCOEUxOUFBMUM2NDY5NDAwNTFBRl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dKODdMQnZ3X0hST3Rza0hBTENGVzZiYVVwVWpicV9FQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJvTNyaTZ1%2BsBFQIoAkMzLBdAJMzMzMzMzRgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&ccb=9-4&oh=00_AYCCrxQm_yCUQnbPzw5z_4gw3oXbyO2tgd46P2mRRbZhvQ&oe=66D94BED&_nc_sid=1d576d',
    username: 'geri.0821',
    timestamp: '2024-08-22T14:20:09+0000'
  },
  {
    id: '18023176178142192',
    media_type: 'IMAGE',
    media_url: 'https://scontent.cdninstagram.com/v/t51.29350-15/456574614_1574359213433050_6608600386046417652_n.webp?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=_4ZzRLTfowgQ7kNvgGrPHrY&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AYCNpBZjHCSDYaCYP8cGIp_VebhoiQnBpIPb1JQW17HILQ&oe=66DD28EC',
    username: 'geri.0821',
    timestamp: '2024-08-21T15:30:32+0000'
  },
  {
    id: '18073423741557634',
    media_type: 'VIDEO',
    media_url: 'https://instagram.fdub1-4.fna.fbcdn.net/o1/v/t16/f1/m86/534E44CE0D9040AD468C65D06C50CCBA_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=instagram.fdub1-4.fna.fbcdn.net&_nc_cat=104&vs=e3012519b3233bf0&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC81MzRFNDRDRTBEOTA0MEFENDY4QzY1RDA2QzUwQ0NCQV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dDTkFMQnQ0cEhXNzV0TUJBQjNKT2dyTlNNQVhicV9FQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJsqgoNSMl%2BYDFQIoAkMzLBdAH1T987ZFohgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&ccb=9-4&oh=00_AYDAJnryPo0rR9MVZCBNeSJtXVEU9RZz3NIU3xR2AGBNTg&oe=66D93182&_nc_sid=1d576d',
    username: 'geri.0821',
    timestamp: '2024-08-16T14:27:52+0000'
  },
  {
    id: '18097900042439818',
    media_type: 'IMAGE',
    media_url: 'https://scontent.cdninstagram.com/v/t51.29350-15/455157767_1032253808295315_6747064333880680368_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=iPVJv_eibTUQ7kNvgFg2DeJ&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AYB8R53N7H7GidYAFFpmKohbFRgsjeu8EWKfmvbn_m6EnQ&oe=66DD335B',
    username: 'geri.0821',
    timestamp: '2024-08-14T13:54:51+0000'
  },

  {
    id: '17949097622821282',
    media_type: 'VIDEO',
    media_url: 'https://instagram.fdub1-4.fna.fbcdn.net/o1/v/t16/f1/m86/7A42C2863D6B29EEA57E7C6C3A491B96_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=instagram.fdub1-4.fna.fbcdn.net&_nc_cat=105&vs=4a95a22d4750ff12&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC83QTQyQzI4NjNENkIyOUVFQTU3RTdDNkMzQTQ5MUI5Nl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dQTEVGUnZZajA0a1JoRUhBSklrSFFoT0FmTnVicV9FQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJvS1uNuBr8UNFQIoAkMzLBdAImZmZmZmZhgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&ccb=9-4&oh=00_AYDxJ9ez0dbPPQgWorW9dzq7nyU5yReP0OFvci5ALlJ-Zw&oe=66D95245&_nc_sid=1d576d',
    username: 'geri.0821',
    timestamp: '2024-08-08T13:50:04+0000'
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
