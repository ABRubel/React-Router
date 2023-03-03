import React from "react";
import { Link } from "react-router-dom";
import serviceData from "../pages/services/servicesData";

function Services() {
  console.log(serviceData);
  const services = serviceData.map((service, index) => (
    <h3 key={index}>
      <Link to={`/services/${service._id}`}>{service.name}</Link> -
      {service.price}
    </h3>
  ));

  return (
    <>
      <h1>Services List Page</h1>
      {services}
    </>
  );
}

export default Services;
