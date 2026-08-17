import CreateTicket from "./CreateTicket";

function Tickets() {
  return (
    <div className="container px-0 ">
      <div className="row ">

        <div className="col-lg-9 col-sm-12 mt-4 ">

          <div className="accordion" id="accordionExample">

            <CreateTicket
              id="collapseOne"
              icon={<i className="fa-solid fa-circle-plus"></i>}
              title="Account Opening"
              items={
                <ul className="ticket-links">
                  <li><a href="">Resident individual</a></li>
                  <li><a href="">Minor</a></li>
                  <li><a href="">NRI</a></li>
                  <li><a href="">Company</a></li>
                  <li><a href="">Glossary</a></li>
                </ul>
              }
            />

            <CreateTicket
              id="collapseTwo"
              icon={<i className="fa-regular fa-user"></i>}
              title="Your Zerodha Account"
              items={
                <ul className="ticket-links">
                  <li><a href="">Profile</a></li>
                  <li><a href="">Password</a></li>
                  <li><a href="">Account details</a></li>
                  <li><a href="">Settings</a></li>
                  <li><a href="">Other queries</a></li>
                </ul>
              }
            />

            <CreateTicket
              id="collapseThree"
              icon={<i class="fa-brands fa-accusoft"></i>}
              title="Tick"
              items={
                <ul className="ticket-links">
                  <li><a href="">IPO</a></li>
                  <li><a href="">Trading FAQs</a></li>
                  <li><a href="">Margin Trading Facility (MTF) and Margins</a></li>
                  <li><a href="">Charts and orders</a></li>
                  <li><a href="">Alerts and Nudges</a></li>
                  <li><a href="">General</a></li>
                </ul>
              }
            />

            <CreateTicket
              id="collapseFour"
              icon={<i class="fa-solid fa-indian-rupee-sign"></i>}
              title="Funds"
              items={
                <ul className="ticket-links">
                  <li><a href="">Add money</a></li>
                  <li><a href="">Withdraw money</a></li>
                  <li><a href="">Add bank accounts</a></li>
                  <li><a href="">eMandates</a></li>
                </ul>
              }
            />

            <CreateTicket
              id="collapseFive"
              icon={<i class="fa-brands fa-xbox"></i>}
              title="Console"
              items={
                <ul className="ticket-links">
                  <li><a href="">Portfolio</a></li>
                  <li><a href="">Corporate actions</a></li>
                  <li><a href="">Funds statement</a></li>
                  <li><a href="">Reports</a></li>
                  <li><a href="">Profile</a></li>
                  <li><a href="">Segments</a></li>
                </ul>
              }
            />

            <CreateTicket
              id="collapseSix"
              icon={<i class="fa-solid fa-coins"></i>}
              title="Coin"
              items={
                <ul className="ticket-links">
                  <li><a href="">Mutual funds</a></li>
                  <li><a href="">National Pension Scheme (NPS)</a></li>
                  <li><a href="">Fixed Deposit (FD)</a></li>
                  <li><a href="">Features on Coin</a></li>
                  <li><a href="">Payments and Orders</a></li>
                  <li><a href="">General</a></li>
                </ul>
              }
            />

          </div>

        </div>

        <div className="col-lg-3 col-sm-12 pt-5 pe-0 ">
           <span className="bg-light d-flex border p-3 fw-semibold">Quick links</span>
                 <ul className=" list-unstyled ticket-links border  ">
                  <li className="border-bottom p-2"><a href="">1. Track account opening</a></li>
                  <li className="border-bottom p-2"><a href="">2. Track segment activation</a></li>
                  <li className="border-bottom p-2"><a href="">3. Intraday margins</a></li>
                  <li className="border-bottom p-2"><a href="">4. Kite user manual</a></li>
                  <li className="p-2"><a href="">5. Learn how to create a ticket</a></li>
                </ul>
        </div>

      </div>
    </div>
  );
}

export default Tickets