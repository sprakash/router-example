import React from "react";
import { useParams } from "react-router-dom";

const ClothingItem = (props) => {
  const params = useParams();
  return <div>More about clothing item : {params.item}</div>;
};

export default ClothingItem;
