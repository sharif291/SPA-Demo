import React from "react";
import p1 from "../assets/images/background/1.jpg";
import p2 from "../assets/images/background/2.jpg";
import p3 from "../assets/images/background/3.jpg";
import p4 from "../assets/images/background/4.jpg";
import p5 from "../assets/images/background/5.jpg";
import p6 from "../assets/images/background/6.jpg";

export default function projects() {
  return (
    <section id="projects">
      <div className="project-page">
        <div className="row">
          <h1 className="title">Projects</h1>
          <hr className="title-line" />
        </div>
        <div className="row">
          <div className="row">
            <h2>Our Projects For Client</h2>
          </div>
          <div className="row">
            <div class="col-4">
              <div
                class="single-features-item bg-64cee6"
                style={{
                  backgroundImage: `url(${p1})`,
                  backgroundSize: "100% 100%",
                  width: "300px",
                  height: "230px",
                }}
              >
                <p>Enter Something</p>
              </div>
            </div>
            <div class="col-4">
              <div
                class="single-features-item bg-64cee6"
                style={{
                  backgroundImage: `url(${p2})`,
                  backgroundSize: "100% 100%",
                  width: "300px",
                  height: "230px",
                }}
              >
                <p>Enter Something</p>
              </div>
            </div>
            <div class="col-4">
              <div
                class="single-features-item bg-64cee6"
                style={{
                  backgroundImage: `url(${p3})`,
                  backgroundSize: "100% 100%",
                  width: "300px",
                  height: "230px",
                }}
              >
                <p>Enter Something</p>
              </div>
            </div>
            <div class="col-4">
              <div
                class="single-features-item bg-64cee6"
                style={{
                  backgroundImage: `url(${p4})`,
                  backgroundSize: "100% 100%",
                  width: "300px",
                  height: "230px",
                }}
              >
                <p>Enter Something</p>
              </div>
            </div>
            <div class="col-4">
              <div
                class="single-features-item bg-64cee6"
                style={{
                  backgroundImage: `url(${p5})`,
                  backgroundSize: "100% 100%",
                  width: "300px",
                  height: "230px",
                }}
              >
                <p>Enter Something</p>
              </div>
            </div>
            <div class="col-4">
              <div
                class="single-features-item bg-64cee6"
                style={{
                  backgroundImage: `url(${p6})`,
                  backgroundSize: "100% 100%",
                  width: "300px",
                  height: "230px",
                }}
              >
                <p>Enter Something</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
