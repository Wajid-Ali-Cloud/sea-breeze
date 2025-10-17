import React from "react";
import { NavLink } from "react-router-dom";

export default function Reserve() {
  return (
    <div className="reserve-page">
      <h2 className="reserve-heading">Reserve your table now:</h2>

      <NavLink
        to="/"
        className="reserve-fish-blue"
        style={{
          backgroundImage: `url("/images/Blue-fish.svg")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        RESERVE
      </NavLink>

      <div className="table-illustration">
        <img src="/images/table.jpg" alt="Table illustration" />
      </div>
    </div>
  );
}
