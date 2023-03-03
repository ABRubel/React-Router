import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "./servicesData";

function ServiceDetail(props) {
  const { id } = useParams();
  const data = servicesData.find((service) => service._id === id);
  console.log(data);
  return (
    <>
      <h1>Service Detail Page {id}</h1>
      <h3>
        {data.name} - ${data.price}
      </h3>
      <p>{data.description}</p>
    </>
  );
}

export default ServiceDetail;
