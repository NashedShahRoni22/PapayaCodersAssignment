import { BiRevision } from "react-icons/bi";
import { FaRegCalendarTimes } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const WhyChooseUs = () => {
  return (
    <div className="my-5">
      <h4 className="pink-header">Why Choose Us ?</h4>
      <p>Edits from India is a post production service provider</p>
      <div className="py-3 row row-cols-1 row-cols-md-3 g-2">
        <div className="col">
          <div className="text-center why-box p-4 rounded">
            <BiRevision className="display-5 icon" />
            <p className="my-3 fw-bold">UNLIMITED REVISION</p>
            <p>Album Designing service comes with unlimited revisions</p>
          </div>
        </div>
        <div className="col">
          <div className="text-center why-box p-4 rounded">
            <FaRegCalendarTimes className="display-5 icon" />
            <p className="my-3 fw-bold">FAST TURNAROUND TIMES</p>
            <p>
              We provide album designs and color correction service in just 2 to
              3 days.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="text-center why-box p-4 rounded">
            <AiFillLike className="display-5 icon" />
            <p className="my-3 fw-bold">100% Hand Edited Images</p>
            <p>
              We provide 100% Hand Edited Images. We do not batch process the
              job.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
