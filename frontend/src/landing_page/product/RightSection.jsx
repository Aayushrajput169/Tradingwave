function RightSection({
  imageURL,
  productName,
  ProductDescription,
  Trydemo,
  learnMore,
  googleplay,
  appStore,
  className,
}) {
  return (
    <div className="container ">
      <div className="row mt-5 pt-5 ">
        <div
          className="col-lg-4 col-md-12 pt-5 mt-5 "
          style={{ fontSize: "1.06rem", lineHeight: "1.8rem" }}
        >
          <h1 className={`fs-3 mb-4 ${className}`}>{productName}</h1>
          <p>{ProductDescription}</p>
          <div>
            <a className="text-decoration-none" href={Trydemo}>
              Try demo
              <i className="fa-solid fa-arrow-right "></i>
            </a>
          </div>
        </div>
        <div className="col-lg-1 "></div>
        <div className="col-lg-7 col-md-12 text-center  ">
          <img src={imageURL} className="img-fluid"/>
        </div>
      </div>
    </div>
  );
}
export default RightSection;
