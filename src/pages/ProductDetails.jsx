import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductDetails } from "../API/Products";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getProductDetails(id);
      setProduct(data);
    })();
  },[]);
  return (
    <div>
      <img src={product?.image} alt="" style={{ height: "700px", width: "700px" }} />
      <p> Product Title :   {product?.title} </p>
      <p> Product Title :   {product?.description}  </p>
    </div>
  );
}