import React from "react";
import { useNavigate } from "react-router-dom";

function RelatedProduct({ image, id }) {
  const navigate = useNavigate();

  // set new url path product and reload page to show clicked
  const handleClick = () => {
    navigate(`/product/${id}`);
    window.location.reload();
  };

  return (
    <img
      src={image}
      alt=""
      className=" w-[150px] object-contain rounded-md my-[10px] "
      onClick={handleClick}
    />
  );
}

export default RelatedProduct;
