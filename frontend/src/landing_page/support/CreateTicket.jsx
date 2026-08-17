function CreateTicket({ id, icon, title, items }) {
  return (
    <div className="accordion-item mt-4 border rounded-2">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed pe-3 rounded-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={id}
          style={{ padding: "0" }}
        >
          <div className="d-flex justify-content-center align-items-center ">
            <div
              className="me-4 bg-light p-3 rounded-start-2 text-primary"
              style={{ fontSize: "23px" }}
            >
              {icon}
            </div>

            <div className="fs-5 fw-medium">{title}</div>
          </div>
        </button>
      </h2>

      <div
        id={id}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body ">{items}</div>
      </div>
    </div>
  );
}

export default CreateTicket;
