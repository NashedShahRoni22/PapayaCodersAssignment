import Head from "next/head";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const cards = [
  {
    name: "Background Removal",
    img: "https://cdn-site-assets.veed.io/How_to_edit_MP_4_Videos_ebdc2c6343/How_to_edit_MP_4_Videos_ebdc2c6343.png?width=1536&quality=75",
  },
  {
    name: "Capturing WOW",
    img: "https://yt3.googleusercontent.com/ytc/AL5GRJVICGWu47-99CayDpTcY5IdpWHjtSxAVhHwmZ9S=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Vimeo Video",
    img: "https://www.lifewire.com/thmb/PhW9E-5EXgBkEiKUwiXrIM5qsw4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vimeo-5ae0e7a2fa6bcc0036691998.jpg",
  },
];

const VideoEditing = () => {
  return (
    <>
      <Head>
        <title>Video Editing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container my-5">
        <h3 className="fw-bold text-center">
          Video <span className="title">Editing</span>
        </h3>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          className="py-5"
        >
          {cards.map((c) => (
            <div className="text-center card mx-1">
              <img src={c.img} alt="" className="video-img" />
              <h5 className="fw-bold py-2">{c.name}</h5>
            </div>
          ))}
        </Carousel>
        <ul className="py-5">
          <li>
            Color Correction: Balancing and adjusting the colors in the video to
            make it look natural and visually appealing.
          </li>
          <li>
            Audio Editing: Enhancing the sound quality and removing any
            background noise from the video.
          </li>
          <li>
            Transitions and Effects: Adding transitional effects between shots,
            such as cross-dissolves, wipes, and fades, to help the video flow
            smoothly.
          </li>
          <li>
            Motion Graphics: Adding graphics and special effects, such as text
            overlays, animation, and lower-thirds, to enhance the visual appeal
            of the video.
          </li>
          <li>
            Titles and Subtitles: Adding text to the video, such as headings,
            captions, and subtitles, to provide additional context and
            information.
          </li>
          <li>
            Image Stabilization: Reducing camera shake and making the video more
            stable and professional looking.
          </li>
          <li>
            Temporal and Spatial Scaling: Changing the speed of the video, as
            well as its aspect ratio, to fit the desired look and feel of the
            final product.
          </li>
          <li>
            Green Screen Keying: Removing the green background from a video shot
            in front of a green screen and replacing it with a different
            background.
          </li>
          <li>
            Cut and Trim: Removing unnecessary or redundant footage and cutting
            the video down to its most essential parts.
          </li>
          <li>
            Split Screen: Splitting the screen into multiple sections to show
            multiple shots or angles at the same time.
          </li>
        </ul>
        <h2 className="fw-bold my-5">
          Book a <span className="title">Service</span>
        </h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          {cards.map((c) => (
            <div className="col">
              <div className="text-center bg-white shadow p-2">
                <img src={c.img} alt="" className="img-fluid" />
                <p className="fw-bold py-2">{c.name}</p>
                <button className="book-now fw-bold">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default VideoEditing;
