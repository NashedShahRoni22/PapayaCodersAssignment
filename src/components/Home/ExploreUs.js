import Link from "next/link";

const ExploreUs = () => {
  return (
    <div className="shadow p-4 rounded">
      <h4 className="blue-header">Explore Our Services</h4>
      <div className="d-flex justify-content-between py-3">
        <div className="link-card text-center">
          <img
            src="https://www.plannthat.com/wp-content/uploads/2020/04/Editing-Apps-for-PC-and-MAC.png"
            alt=""
          />
          <h5 className="fw-bold mb-4">Photo Editing</h5>
          <Link
            className="blue-header text-white"
            href={"services/PhotoEditing"}
          >
            Explore Now
          </Link>
        </div>
        <div className="link-card text-center">
          <img
            src="https://images.ctfassets.net/b4k16c7lw5ut/01kk43Zc5lOQqZoEXs06yo/59db03b36b7eb15c3a78710d873273bb/Easy_video_editing_for_everyone.png?w=1920&h=1080&q=50&fm=png"
            alt=""
          />
          <h5 className="fw-bold mb-4">Video Editing</h5>
          <Link
            className="blue-header text-white"
            href={"services/VideoEditing"}
          >
            Explore Now
          </Link>
        </div>
        <div className="link-card text-center">
          <img src="https://jalbum.net/img/jalbum-editor.jpg" alt="" />
          <h5 className="fw-bold mb-4">Album Editing</h5>
          <Link
            className="blue-header text-white"
            href={"services/VideoEditing"}
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreUs;
