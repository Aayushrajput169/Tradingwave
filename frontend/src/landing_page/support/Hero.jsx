function Hero() {
  return (
    <div className="container-fluid bg-body-tertiary">
      <div className=" row mx-4">
        <div className="col-sm-6 col-12 mt-4">
          <h1 className="fs-2 fw-bold ps-3">Support Portal</h1>
        </div>

        <div className="col-sm-6 col-12 text-end mt-4 support-button">
          <button className="btn btn-primary">My Tickets</button>
        </div>
        <div>
         
          <input 
            type="text" className="mb-5 mt-4 p-3 text-muted mx-2 border rounded-2  " style={{width:"99%"}}
            placeholder="Eg: How do I open my account, How do i activate F&O..."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
