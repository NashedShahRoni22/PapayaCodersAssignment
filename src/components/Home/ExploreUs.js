import Link from "next/link";

const ExploreUs = () => {
  return (
    <div className="shadow p-4 rounded">
      <h4 className="blue-header">Explore Our Services</h4>
      <div className="row row-cols-md-2 row-cols-lg-3 py-3 g-4">
        <div className="col">
          <div className="link-card text-center">
            <img
              src="https://www.plannthat.com/wp-content/uploads/2020/04/Editing-Apps-for-PC-and-MAC.png"
              alt=""
            />
            <h5 className="fw-bold my-3">Photo Editing</h5>
            <Link href={"/services/PhotoEditing"}>
              <button className="explore-now fw-bold">Explore Now</button>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="link-card text-center">
            <img
              src="https://images.ctfassets.net/b4k16c7lw5ut/01kk43Zc5lOQqZoEXs06yo/59db03b36b7eb15c3a78710d873273bb/Easy_video_editing_for_everyone.png?w=1920&h=1080&q=50&fm=png"
              alt=""
            />
            <h5 className="fw-bold my-3">Video Editing</h5>
            <Link href={"/services/VideoEditing"}>
              <button className="explore-now fw-bold">Explore Now</button>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="link-card text-center">
            <img src="https://jalbum.net/img/jalbum-editor.jpg" alt="" />
            <h5 className="fw-bold my-3">Album Editing</h5>
            <Link href={"/services/VideoEditing"}>
              <button className="explore-now fw-bold">Explore Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreUs;
