import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className=" container mt-5 pt-5">
      <div className="row px-5 mx-5">
        <div className="col text-center ">
          <h1 className="fs-3">The Zerodha Universe</h1>
          <p className="mt-4">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>
      <div className="row text-center p-5  ">
        <div className="col-lg-4 col-md-12 p-3">
          <img src="media\zerodhaFundhouse.png" className="universe-logo" alt="Zerodha fund house" />
          <p className="small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-lg-4 col-md-12 p-3 ">
          <img src="media\sensibullLogo.svg" className="universe-logo" alt="Sensibull Logo" />
          <p className="small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-lg-4 col-md-12 p-3">
          <img src="media\tijori.svg" className="universe-logo" alt="" />
          <p className="small">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more
          </p>
        </div>
        <div className="col-lg-4 col-md-12 p-3">
          <img src="media\streakLogo.png" className="img-fluid universe-logo" alt="" />
          <p className="small">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-lg-4 col-md-12 p-3">
          <img src="media\smallcaseLogo.png" className="img-fluid universe-logo" alt="" />
          <p className="small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-lg-4 col-md-12 p-3">
          <img src="media/dittoLogo.png" className="img-fluid universe-logo" alt="" />
          <p className="small">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="mt-5">
        
             <Link to="/signup" className='btn btn-primary px-2 py-2 fs-5 mt-4 'style={{width:"200px" , margin:"auto"}} >Sign up for free</Link>
         
        </div>
      </div>
    </div>
  );
}
export default Universe;
