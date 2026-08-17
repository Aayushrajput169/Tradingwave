import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 pt-5">
        <h1 className="fs-2 mb-3">Charges</h1>
        <h4 className="text-muted">List of all charges and taxes</h4>
      </div>
      <div className="row mt-5 pt-5">
        <div className="col-lg-4 col-md-12 text-center gx-4 ">
          <img src="media/pricing-eq-1.svg" style={{ width: "16rem" }} alt="" />
          <h1 className="fs-2 mt-4">Free equity delivery</h1>
          <p
            className="mt-4 text-muted "
            style={{ fontSize: "1.125rem", lineHeight: "1.8rem" }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-lg-4 col-md-12 text-center  gx-4">
          <img src="Media/pricing-eq-2.svg" style={{ width: "16rem" }} alt="" />
          <h1 className="fs-2 mt-4">Intraday and F&O trades</h1>
          <p
            className="mt-4 text-muted "
            style={{ fontSize: "1.125rem", lineHeight: "1.8rem" }}
          >
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-lg-4 col-md-12 text-center gx-4 ">
          <img src="media/pricing-eq-1.svg" style={{ width: "16rem" }} alt="" />
          <h1 className="fs-2 mt-4">Free direct MF</h1>
          <p
            className="mt-4 text-muted "
            style={{ fontSize: "1.125rem", lineHeight: "1.8rem" }}
          >
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
      <div className="row text-center mt-5 pt-5">
        <h1>Open a Zerodha account</h1>
        <p className="mt-2">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades. Sign up for free
        </p>
        
        <Link to="/signup"
          className="btn btn-primary px-2 py-2 fs-5 mt-4 mb-5"
          style={{ width: "200px", margin: "auto" }}
        >
          Sign up for free
        </Link>
    
      </div>
    </div>
  );
}
export default Hero;
