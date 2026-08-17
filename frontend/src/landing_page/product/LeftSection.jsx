function LeftSection({
  imageURL,
  productName,
  ProductDescription,
  Trydemo,
  learnMore,
  googleplay,
  appStore,
}) {
  return (
    <div className="container pt-5">
      <div className="row mt-5 ">
        <div className="col-lg-6 col-md-12 ps-5 ps-5 text-center">
          <img src={imageURL} />
        </div>
        <div className="col-lg-2 "></div>
        <div
          className="col-lg-4 col-md-12 mt-5"
          style={{ fontSize: "1.06rem", lineHeight: "1.8rem" }}
        >
          <h1 className="fs-3 mb-4">{productName}</h1>
          <p>{ProductDescription}</p>
          <div>
            <a className="text-decoration-none" href={Trydemo}>
              Try demo 
                <i className="fa-solid fa-arrow-right "></i>
            </a>
            <a
              className="text-decoration-none"
              href={learnMore}
              style={{ marginLeft: "65px" }}
            >
              Learn more
               <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googleplay}>
              <img src="media\googlePlayBadge.svg" alt="googlePlay image" />
            </a>
            <a href={appStore} style={{ marginLeft: "25px" }}>
              <img src="media\appstoreBadge.svg" alt="appStore image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
