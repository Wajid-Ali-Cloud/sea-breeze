import React from "react";

export default function Reserve() {
  return (
    <div className="page container">
      <h1>RESERVE</h1>
      <p>Reserve your table now:</p>
      <form className="reserve-form" onSubmit={(e)=>e.preventDefault()}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Date & Time
          <input type="datetime-local" name="datetime" />
        </label>
        <label>
          Guests
          <input type="number" name="guests" min="1" defaultValue="2" />
        </label>
        <button className="btn">Reserve</button>
      </form>
    </div>
  );
}
