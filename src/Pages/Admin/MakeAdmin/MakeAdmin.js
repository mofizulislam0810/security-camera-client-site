import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://evening-cliffs-01077.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Make Admin Successfully!");
          e.target.reset();
          navigate("/dashboard/makeadmin");
        }
      });
    e.preventDefault();
  };
  return (
    <div className="mx-5 mt-5">
      <h2 className="btn btn-dark bg-gradient m-3 w-50 fw-bold">Make Admin</h2>
      <form
        onSubmit={handleAdminSubmit}
        className="row g-3 p-3 w-75 mx-auto
"
      >
        <div className="col-md-12 mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            onBlur={handleOnBlur}
            id="inputDate"
            placeholder="Email"
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-outline-dark w-100">
            Make Admin
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
