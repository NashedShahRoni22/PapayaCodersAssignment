import { MdEmail, MdPhone } from "react-icons/md";
import { AiFillSkype, AiFillFacebook, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
const serivices = [
  { name: "Professional Portrait Retouching Services" },
  { name: "Online Ecommerce Product photo retouching Company" },
  { name: "Real Estate Photo Editing" },
  { name: "Remove background" },
  { name: "Shadow & Reflection" },
  { name: "Statue Photo Retouching" },
  { name: "Wedding Photo Retouching" },
  { name: "Fashion Apparel Photo Editing Services" },
  { name: "Animal Photo Retouching" },
  { name: "Automobiles Photo Retouching" },
  { name: "Online Clippin Path Services provider Company" },
  { name: "Color Correction" },
  { name: "Invisible Mannequin Photo Editing" },
  { name: "Jewellery Photo Editing" },
  { name: "Markups Escape photo Retouching" },
  { name: "Photo Enhancement" },
  { name: "Photo Restoration" },
  { name: "Plastic Removal" },
];
const Footer = () => {
  return (
    <footer className="mx-3">
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="d-flex align-items-center justify-content-center d-md-flex-column">
            <div>
              <img src="/logo.png" alt="" />
            </div>
            <div>
              <h4 className="title fw-bold">About</h4>
              <ul>
                <li> About Company</li>
                <li>Portfolio</li>
                <li>Get Quote</li>
                <li>FAQ's</li>
                <li>Testimonials</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h4 className="title fw-bold">Our Services</h4>
          <ul className="row row-cols-2">
            {serivices.map((s) => (
              <li>{s.name}</li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-3">
          <h4 className="title fw-bold">Contact</h4>
          <p>
            Om Heera Panna Mall, Office No. 205, 2nd Floor, Oshiwara Police
            Station Rd, Oshiwara, Mumbai, Maharashtra 400058
          </p>
          <div>
            <div className="d-flex">
              <MdEmail className="social-icon me-2"/>
              <p>contact@editsfromindia.com</p>
            </div>
            <div className="d-flex">
              <MdPhone className="social-icon me-2"/>
              <p>editsfromindia</p>
            </div>
            <div className="d-flex">
              <AiFillSkype className="social-icon me-2"/>
              <p>+919076017111</p>
            </div>
          </div>
          <h4 className="title">Follow Us</h4>
          <div>
            <AiFillFacebook className="display-5 social-icon"/>
            <AiFillLinkedin className="display-5 social-icon"/>
            <AiFillInstagram className="display-5 social-icon"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
