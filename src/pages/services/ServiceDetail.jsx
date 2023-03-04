import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import servicesData from "./servicesData";

function ServiceDetail(props) {
  const { id } = useParams();
  const data = servicesData.find((service) => service._id === id);
  let navigate = useNavigate();
  let handleClick = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <>
      <h1>Service Detail Page {id}</h1>
      <h3>
        {data.name} - ${data.price}
      </h3>
      <p>{data.description}</p>
      <button onClick={handleClick}>Go to all services</button>
    </>
  );
}

export default ServiceDetail;
