const Landing = () => {
  return (
    <section id="landing-hero" className="my-5 py-5 row row-cols-1 row-cols-md-2 align-items-center">
      <div>
        <h4 className="fw-bold display-6 lh-base">
          Welcome to <br /> Edits From India <br /> Premium Quality Edits
        </h4>
        <h5 className="my-3">
          Find Value and Build confidence, Lorem Ipsum is simply <br />
          dummy text of printing and typesetting industry.
        </h5>
        <button className="fw-bold book-now">
          Get Started
        </button>
      </div>
      <div className="row row-cols-2 justify-content-between my-3">
        <img src="/before-hero.jpg" alt="" className=""/>
        <img src="/after-hero.jpg" alt="" className=""/>
      </div>
    </section>
  );
};

export default Landing;
