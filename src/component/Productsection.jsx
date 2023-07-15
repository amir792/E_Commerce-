import React from 'react'
import ProductCard from './ProductCard'
// import { getProducts } from "../API/Products";
import { useSelector } from "react-redux";


export default function Productsection() {
  const products = useSelector((state) => state.products.arrWithCount);
  return (
    <>
      <div className="container py-5">
        <div className="row g-2 ">
          {products?.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-4 ">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}



 // const [products, setproducts] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const data = await getProducts();
  //     setproducts(data);
  //   })();
  // }, []);

