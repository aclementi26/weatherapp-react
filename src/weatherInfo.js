import React from "react";
export default function weatherInfo() {
  return (
    <div class="city">
      <div className="col-6">
        <ul>
          <li>
            <span id="sky"></span> sunny
          </li>
          <li>
            <span id="humidity"></span> 45 %
          </li>
          <li>
            <span id="wind"> </span>2 mph
          </li>
        </ul>
      </div>
    </div>
  );
}
