import React from "react";
import { HashLink } from "react-router-hash-link";
import placeholder from "../assets/images/background/home-bg.png";
import SEO from "../assets/images/background/seo.PNG";
import AboutUs from "../Components/aboutUs";
import Services from "../Components/services";
import Projects from "../Components/projects";

export default function Home() {
  return (
    <section id="">
      <div className="main">
        <div className="container">
          <div className="home-page">
            <div className="row">
              <div className="col-6 fb-100">
                <h2>Digital Agency with Excellence Service</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  eiusmod tempor incididunt ut labore.
                </p>
                <HashLink className="btn" smooth to="/#about">
                  More About Us
                </HashLink>
              </div>
              <div className="col-6">
                <img src={placeholder}></img>
              </div>
            </div>

            <div className="row">
              <div className="col-4 fb-100">
                <h2>Create Awesome Service With Our Tools</h2>
                <hr className="title-line" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry.
                </p>
                <HashLink className="btn" smooth to="/#services">
                  More Details
                </HashLink>
              </div>
              <div className="col-6 fb-100">
                <div className="row">
                  <div class="col-6 fb-100">
                    <div class="single-features-item bg-9587c5">
                      <div className="image">
                        <img src={SEO} alt="" />
                      </div>
                      <h3>Seo Consultancy</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div class="col-6 fb-100">
                    <div class="single-features-item bg-64cee6">
                      <div className="image">
                        <img src={SEO} alt="" />
                      </div>
                      <h3>Competitor Analysis</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div class="col-6 fb-100">
                    <div class="single-features-item bg-64cee6">
                      <div className="image">
                        <img src={SEO} alt="" />
                      </div>
                      <h3>Social Media Marketing</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div class="col-6 fb-100">
                    <div class="single-features-item bg-9587c5">
                      <div className="image">
                        <img src={SEO} alt="" />
                      </div>
                      <h3>Seo Consultancy</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <AboutUs></AboutUs>
            <Services></Services>
            {/* Projects */}
            <Projects></Projects>
          </div>
        </div>
      </div>
    </section>
  );
}
