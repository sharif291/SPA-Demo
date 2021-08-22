import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Service from "../Components/services";
import ServiceDetails from "../Components/serviceDetails";

export default function Section() {
  return (
    <>
      <Route path="/" exact component={Home}></Route>
      <Route path="/all_service" exact component={Service}></Route>
      <Route path="/service_details" exact component={ServiceDetails}></Route>
    </>
  );
}
