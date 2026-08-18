import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <h1 className="fs-2 text-center text- ">People</h1>
      </div>
      <div className="row mt-5 ">
        <div className="col-lg-6 col-md-12 text-center mb-5 ">
          <img
            src="media\Aayush1.png"
            alt="Co Founder Image"
            className=" rounded-circle w-50 text-left"
          />
          <h5 className="mt-4">Aayush Rajput </h5>
          <h6 className="text-muted mt-4 ">React Developer</h6>
        </div>
        <div
          className="col-lg-6 col-md-12 pe-5 mb-5 pb-5  "
          style={{ fontSize: "17px", lineHeight: "1.85rem" }}
        >
          <p>
            I am a passionate React Developer with a strong foundation in modern
            frontend technologies. I enjoy building responsive, user-friendly,
            and dynamic web applications using React.js, JavaScript, HTML, CSS,
            and Tailwind CSS. Through hands-on projects, I continuously improve
            my problem-solving skills and explore modern web development
            practices to create clean and engaging user experiences.
          </p>
          <p>
            Currently, I am focused on mastering React.js, JavaScript, API
            integration, and frontend development while preparing for
            professional software development roles.
          </p>
          <p>
            Connect on
            <Link to="/" className="text-decoration-none">
              {" "}
              Homepage{" "}
            </Link>
            /
          </p>
        </div>
      </div>
    </div>
  );
}
export default Team;
