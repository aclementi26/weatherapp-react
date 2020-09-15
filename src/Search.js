import React from "react";
export default function Search() {
  return (
    <form>
      <div className="form-row">
        <div className="col-3">
          <input
            type="search"
            className="form-control"
            id="exampleInputEmail1"
            placeholder=" Enter a City"
          />
        </div>

        <div className="col-">
          <input
            type="submit"
            value="Search"
            className="btn btn-outline-info"
          />
        </div>
        <div className="col-">
          <button className="btn btn-outline-info">Current</button>
        </div>
      </div>
    </form>
  );
}
