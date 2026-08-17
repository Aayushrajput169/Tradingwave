import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mt-5 pt-5">
      <div className="row text-center pt-5">
        <h1>Open a Zerodha account</h1>
        <p className="mt-2">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades. Sign up for free
        </p>

          <Link to="/signup" className='btn btn-primary px-2 py-2 fs-5 mt-4 mb-5' style={{width:"200px" , margin:"auto"}}>Sign up for free</Link>
      </div>
    </div>
  );
}

export default OpenAccount;
