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

const aldumEditingCards = [
  {
    name: "Model Album",
    img: "https://admin.editsfromindia.com/storage/portfolios/portfolios-63eca36046e54.jpg",
  },
  {
    name: "Event Album",
    img: "https://admin.editsfromindia.com/storage/portfolios/portfolios-63e696f8c93e1.jpg",
  },
  {
    name: "Product Album",
    img: "https://admin.editsfromindia.com/storage/portfolios/portfolios-63f1d1cc0ba48.jpg",
  },
];

const AlbumEditing = () => {
  return (
    <>
      <Head>
        <title>Album Editing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container py-5">
        <h3 className="fw-bold text-center">Album <span className="title">Editing</span></h3>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          className="py-5"
        >
          {aldumEditingCards.map((c) => (
            <div className="text-center card mx-1">
              <img src={c.img} alt="" />
              <h5 className="fw-bold py-2">{c.name}</h5>
            </div>
          ))}
        </Carousel>
        <ul className="list py-5">
          <li>
            <span className="fw-bold">Layout Design:</span> This includes designing the overall look and feel of
            the album, including the placement of images, the use of graphics
            and other design elements.
          </li>
          <li>
            <span className="fw-bold">Image Selection and Cropping:</span> This involves selecting the best
            images for the album and cropping them to fit the desired layout.
          </li>
          <li>
            <span className="fw-bold">Color Correction and Retouching:</span> This involves adjusting the color
            balance, brightness and contrast of the images to make them look
            their best. Retouching involves removing any blemishes, lines or
            spots from the images.
          </li>
          <li>
            <span className="fw-bold">Backgrounds and Textures:</span> This involves adding backgrounds, textures
            and design elements to enhance the visual appeal of the images in
            the album.
          </li>
          <li>
            <span className="fw-bold">Effects and Filters:</span> This involves adding special effects and
            filters to the images to create a unique and personalized look for
            the album.
          </li>
          <li>
            <span className="fw-bold">Printing and Binding:</span> This involves printing the final design on
            high-quality paper and binding it into a hardcover or softcover
            album that is ready to display.
          </li>
        </ul>
        <h2 className="fw-bold my-5">Book a <span className="title">Service</span></h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          {aldumEditingCards.map((c) => (
            <div className="col">
              <div className="text-center bg-white shadow rounded p-2">
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

export default AlbumEditing;
