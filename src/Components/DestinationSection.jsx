import React from "react";
import "./Destination.css";
const DestinationSection = () => {
  return (
    <>
      <div className="maincontent">
        <div className="card" style={{ width: "38rem" }}>
          <div className="card-body">
            <h3>FIND YOUR TOUR</h3>
            <p>From</p>
            <select className="form-select" aria-label="Default select example">
              <option selected>Hyderabad</option>
              <option value={1}>Mumbai</option>
              <option value={2}>Delhi</option>
              <option value={3}>Bengaluru</option>
            </select>
            <p>To</p>
            <select className="form-select" aria-label="Default select example">
              <option selected>USA</option>
              <option value={1}>Russia</option>
              <option value={2}>China</option>
              <option value={3}>Dubai</option>
            </select>
            <form className="row g-3">
              <div className="col-auto">
                <p>Depart Date</p>
                <label
                  htmlFor="inputPassword2"
                  className="visually-hidden"
                ></label>
                <input
                  type="Date"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Choose the Date"
                />
              </div>
              <div className="col-auto">
                <p>Duration</p>
                <label
                  htmlFor="inputPassword2"
                  className="visually-hidden"
                ></label>
                <input
                  type="Number"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Days"
                />
              </div>
            </form>
            <form className="row g-3">
              <div className="col-auto">
                <p>Adults</p>
                <label
                  htmlFor="inputPassword2"
                  className="visually-hidden"
                ></label>
                <input
                  type="Number"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="How Many"
                />
              </div>
              <div className="col-auto">
                <p>Children</p>
                <label
                  htmlFor="inputPassword2"
                  className="visually-hidden"
                ></label>
                <input
                  type="Number"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="How Many"
                />
              </div>
            </form>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="button">
                Search Flight
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationSection;