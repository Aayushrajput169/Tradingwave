
function Awards() {
  return (
    <div className="container ">
      <div className="row pb-5 ">
        <div className="col-lg-6 col-md-12 pe-5 pt-5  mt-5 " >
          <img src="media/largestBroker.svg" alt="largest Brocker" style={{width:"110%"}} />
        </div>
        <div className="col-lg-6 col-md-12 mt-4 pt-5 ps-5">
          <h1 className="fs-2 mb-4">Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in india daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bond and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media\pressLogos.png" className="mt-4" style={{width:'90%'}} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
