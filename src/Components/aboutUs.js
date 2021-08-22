import React from "react";
import placeholder from "../assets/images/background/about-image.png";

export default function aboutUs() {
  return (
    <section id="about">
      <div className="about-page">
        <div className="row">
          <h1 className="title">About US</h1>
          <hr className="title-line" />
        </div>
        <div className="row">
          <div className="col-6 fb-100">
            <h2>We are Dynamic Team of SEO Agency</h2>
            <hr className="title-line" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt labore dolore magna aliqua. <br /> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
            </p>
            {/* <HashLink className="btn" smooth to="#collection_list">
              More About Us
            </HashLink> */}
          </div>
          <div className="col-6">
            <img src={placeholder}></img>
          </div>
        </div>
      </div>
    </section>
  );
}
