import React from "react";
import { data } from "../../data/data";
import { useParams } from "react-router-dom";

const SingleService = () => {
  const { id } = useParams();

  const product = data.find((product) => product.id === parseInt(id));
  return <div></div>;
};

export default SingleService;
