import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Section from "../section/Section";
import Newsletter from "./Newsletter";

export default function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <Section></Section>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}
