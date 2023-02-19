import {
  BsChatSquareQuoteFill,
  BsBoxSeam,
  BsFillCloudDownloadFill,
} from "react-icons/bs";
import { RiBillLine } from "react-icons/ri";
const HowItWorks = () => {
  return (
    <section className="py-5">
      <h4 className="pink-header">How it works?</h4>
      <div className="d-md-flex py-5 gap-2">
        <div className="shadow rounded p-4">
          <p className="fw-bold">Step 1</p>
          <BsChatSquareQuoteFill className="display-5 icon my-3"/>
          <p className="">
            <span className="fw-bold">Request Quote</span> <br />
            Get a Quote in Your inbox within 45 minutes. Step 2. Place Order
          </p>
        </div>
        <div className="shadow rounded p-4">
          <p className="fw-bold">Step 2</p>
          <BsBoxSeam className="display-5 icon my-3"/>
          <p className="">
            <span className="fw-bold">Place Order</span> <br />
            Get a Quote in Your inbox within 45 minutes.
          </p>
        </div>
        <div className="shadow rounded p-4">
          <p className="fw-bold">Step 3</p>
          <RiBillLine className="display-5 icon my-3"/>
          <p className="">
            <span className="fw-bold">Pay Your Bill</span> <br />
            Get a Quote in Your inbox within 45 minutes.
          </p>
        </div>
        <div className="shadow rounded p-4">
          <p className="fw-bold">Step 4</p>
          <BsFillCloudDownloadFill className="display-5 icon my-3"/>
          <p className="">
            <span className="fw-bold">Download Image</span> <br />
            Get a Quote in Your inbox within 45 minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
