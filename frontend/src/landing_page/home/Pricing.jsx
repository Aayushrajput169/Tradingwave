

function Pricing() {
  return (
    <div className="container mt-5 pt-5 ">
      <div className=" row pt-5 mt-5">
        <div className="col-lg-6 col-md-12">
          <h1 className=" fs-2 mb-4">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className=" col-lg-6 col-md-12 mt-4">
          <div className="row text-muted">
            <div className="  col-lg-4 col-md-4 d-flex align-items-center ">
              <img src="media/pricing-eq-1.svg" alt="" style={{width:"110px"}}  />
              <p className="pt-3" style={{fontSize:".6rem"}}>Free account opening</p>
              
            </div>
            <div className="col-lg-4 col-md-4 d-flex align-items-center">
              <img src="media/pricing-eq-1.svg" alt="" style={{width:"110px"}} />
              <p className="pt-3" style={{fontSize:".6rem"}}>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-lg-4 col-md-4 d-flex align-items-center">
              <img src="media/pricing-eq-2.svg" alt="" style={{width:"110px"}}/>
              <p className="pt-3" style={{fontSize:".6rem"}}>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
