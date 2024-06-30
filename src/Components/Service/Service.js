import React from "react";

import "./ServiceStyles.css";

import { AiOutlineBars, AiOutlineBell, AiOutlineUser } from "react-icons/ai";

function Service() {
  return (
    <div id="service" class="service">
      <div class="title">
        <h2>Our Services</h2>
      </div>

      <div class="box">
        <div class="card">
          <AiOutlineBars className="icons" />
          <h5>Web Development</h5>
          <div class="pra">
            <p>
              Every website should be built with two primary goals: Firstly, it
              needs to work across all devices. Secondly, it needs to be fast as
              possible.
            </p>

            <button>Read More</button>
          </div>
        </div>
        <div class="card">
          <AiOutlineUser className="icons" />
          <h5>Web Development</h5>
          <div class="pra">
            <p>
              Every website should be built with two primary goals: Firstly, it
              needs to work across all devices. Secondly, it needs to be fast as
              possible.
            </p>

            <button>Read More</button>
          </div>
        </div>
        <div class="card">
          <AiOutlineBell className="icons" />
          <h5>Web Development</h5>
          <div class="pra">
            <p>
              Every website should be built with two primary goals: Firstly, it
              needs to work across all devices. Secondly, it needs to be fast as
              possible.
            </p>

            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
