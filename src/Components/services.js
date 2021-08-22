import React from "react";
import SEO from "../assets/images/background/seo.PNG";
import { HashLink } from "react-router-hash-link";

export default function services() {
  return (
    <div className="container">
      <section id="services">
        <div className="service-page">
          <div className="row">
            <h1 className="title">Services</h1>
            <hr className="title-line" />
          </div>
          <div className="row">
            <div className="row">
              <h2>How We Can Help?</h2>
            </div>
            <div className="row">
              <div class="col-4 fb-100">
                <HashLink smooth to="/service_details#">
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
                </HashLink>
              </div>
              <div class="col-4 fb-100">
                <HashLink smooth to="/service_details#">
                  <div class="single-features-item bg-64cee6">
                    <div className="image">
                      <img src={SEO} alt="" />
                    </div>
                    <h3>Search Engine Optimization</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </HashLink>
              </div>
              <div class="col-4 fb-100">
                <HashLink smooth to="/service_details#">
                  <div class="single-features-item bg-64cee6">
                    <div className="image">
                      <img src={SEO} alt="" />
                    </div>
                    <h3>Real Time And Data</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </HashLink>
              </div>
              <div class="col-4 fb-100">
                <HashLink smooth to="/service_details#">
                  <div class="single-features-item bg-64cee6">
                    <div className="image">
                      <img src={SEO} alt="" />
                    </div>
                    <h3>Online Media Management</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </HashLink>
              </div>
              <div class="col-4 fb-100">
                <HashLink smooth to="/service_details#">
                  <div class="single-features-item bg-64cee6">
                    <div className="image">
                      <img src={SEO} alt="" />
                    </div>
                    <h3>Reporting & Analysis</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </HashLink>
              </div>
              <div class="col-4 fb-100">
                <HashLink smooth to="/service_details#">
                  <div class="single-features-item bg-64cee6">
                    <div className="image">
                      <img src={SEO} alt="" />
                    </div>
                    <h3>Penalty Recovery</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
