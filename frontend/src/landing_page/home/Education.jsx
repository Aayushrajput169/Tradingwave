function Education() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row pt-5 ">
        <div className="col-md-12 col-lg-6 mt-5 mb-5 pe-5 ps-3">
          <img
            src="media/education.svg"
            alt="Education Image"
            style={{ width: "85%" }}
          />
        </div>

        <div className="col-lg-6 col-md-12 mt-4 px-4 pt-5">
          <h1 className="fs-2">Free and open market education</h1>
          <p className="mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A<i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
