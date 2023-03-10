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
    img: "https://admin.editsfromindia.com/storage/portfolios/portfolios-63dc8de08122c.jpg",
  },
  {
    name: "Photo Reducing",
    img: "https://admin.editsfromindia.com/storage/portfolios/portfolios-63dc9036961ac.jpg",
  },
  {
    name: "Cliping Path",
    img: "https://admin.editsfromindia.com/storage/portfolios/portfolios-63dc8ec8b3a98.jpg",
  },
  {
    name: "Image Masking",
    img: "https://admin.editsfromindia.com/storage/portfolios/portfolios-63dc8f7b95035.jpg",
  },
  {
    name: "Drop Shadow",
    img: "https://admin.editsfromindia.com/storage/portfolios/portfolios-63dc8f184ba3d.jpg",
  },
];
const PhotoEditing = () => {
  return (
    <>
      <Head>
        <title>Photo Editing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container my-5">
        <h2 className="fw-bold text-center">Photo <span className="title">Editing</span></h2>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          className="py-5"
        >
          {cards.map((c) => (
            <div className="text-center card mx-1">
              <img src={c.img} alt="" />
              <h5 className="fw-bold py-2">{c.name}</h5>
            </div>
          ))}
        </Carousel>
        <div className="py-5">
          <h6 className="content">
            Photo editing is the process of changing or enhancing the appearance
            of a photo using various techniques and tools. It may involve
            correction of exposure, color balance, cropping, removing unwanted
            objects or blemishes, and adding special effects to the image. Photo
            editing can be performed digitally or through traditional methods,
            and the final result is a high-quality and visually appealing image
            that represents the desired look and feel. Photo editing services
            are used by professional photographers, individuals, and businesses
            to improve the visual impact and overall quality of their photos.
          </h6>
          <ul className="content list">
            <li>
              <span className="fw-bold">Color correction:</span> Adjusting the overall color balance, saturation,
              and exposure to improve the appearance of an image.
            </li>
            <li>
              <span className="fw-bold">Blemish removal:</span> Removing skin imperfections, such as blemishes,
              spots, and wrinkles.
            </li>
            <li>
              <span className="fw-bold">Object removal:</span> Removing unwanted objects or distractions from an
              image.
            </li>
            <li>
              <span className="fw-bold">Background change:</span> Changing the background of an image to improve
              the composition or fit the theme of the image.
            </li>
            <li>
              <span className="fw-bold">Shadows and highlights:</span> Adjusting the brightness and contrast of
              specific areas of an image to enhance the visual appeal.
            </li>
            <li>
              <span className="fw-bold">Sharpening:</span> Improving the clarity and sharpness of an image to
              make it more visually appealing.
            </li>
            <li>
              <span className="fw-bold">Resizing:</span> Changing the size of an image to fit a specific
              requirement or aspect ratio.
            </li>
            <li>
              <span className="fw-bold">Cropping:</span> Trimming an image to improve the composition or focus on
              a specific area of the image.
            </li>
            <li>
              <span className="fw-bold">Noise reduction:</span> Reducing the grain or speckling in an image to
              improve its quality.
            </li>
            <li>
              <span className="fw-bold">Watermark removal:</span> Removing a watermark or logo from an image.
            </li>
          </ul>
        </div>
        <h2 className="fw-bold my-5">
          Book a <span className="title">Service</span>
        </h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          {cards.map((c) => (
            <div className="col">
              <div className="text-center bg-white shadow p-3 rounded">
                <img src={c.img} alt="" className="img-fluid"/>
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

export default PhotoEditing;
