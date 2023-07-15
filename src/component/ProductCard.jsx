// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import React from "react";
import DinamicCounter from "./DinamicCounter";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { decCartCount, incCartCount } from "../Redux/Slices/cartCounterSlice";
import {decProductCount,incProductCount} from "../Redux/Slices/productsSlice";

export default function ProductCard({
  product: { image, id, price, title, count },
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInc = (id) => {
    dispatch(incCartCount());
    dispatch(incProductCount(id));
  };
  const handleDec = (id) => {
    dispatch(decCartCount());
    dispatch(decProductCount(id));
  };
  const navigateToDetails = (id) => {
    navigate(`${id}`);
  };

  return (

    <div className="card h-100">
      <img
        src={image}
        style={{ height: "300px", objectFit: "contain", cursor: "pointer" }}
        className ="card-img-top"
        alt="..."
        onClick={() => navigateToDetails(id)}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">price:  {price}$</p>
        <div className="d-flex justify-content-between">
          <button
            href="#"
            onClick={() => handleInc(id)}
            className="btn btn-success"
            style={{ width: count ? "" : "100%" }}
          >
            add
          </button>
          {count ? (
            <>
              <span>{count}</span>
              <button
                href="#"
                onClick={() => handleDec(id)}
                className="btn btn-danger"
              >
                remove
              </button>
              {/* <DinamicCounter /> */}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}






























// import React from 'react'
// // import  { useContext, useState } from "react";
// import { useNavigate } from "react-router";
// // import { productsContext } from '../contexts/Products';
// import DinamicCounter from "./DinamicCounter";
// import { useDispatch } from "react-redux";
// import {decCartCount, incCartCount } from "../Redux/Slices/cartCounterSlice";
// import {decProductCount,incProductCount } from "../Redux/Slices/productsSlice";




// export default function ProductCard({ product: { image, id, price, title , count  } }) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleInc = (id) => {
//     dispatch(incCartCount());
//     dispatch(incProductCount(id));
//   };
//   const handleDec = (id) => {
//     dispatch(decCartCount());
//     dispatch(decProductCount(id));
//   };
//   const navigateToDetails = (id) => {
//     navigate(`${id}`);
//   };


//   return( <div className="card h-100">
//   <img
//     src={image}
//     style={{ height: "300px", objectFit: "contain", cursor: "pointer" }}
//     className="card-img-top"
//     alt="..."
//     onClick={() => navigateToDetails(id)}
//   />
//   <div className="card-body d-flex flex-column justify-content-between">
//     <h5 className="card-title">{title}</h5>
//     <p className="card-text">price:{price}</p>
//     <div className="d-flex justify-content-between">
//       <button
//         href="#"
//         onClick={() => handleInc(id)}
//         className="btn btn-success"
//         style={{ width: count ? "" : "100%" }}
//       >
//         add
//       </button>
//       {count ? (
//         <>
//           <span>{count}</span>
//           <button
//             href="#"
//             onClick={() => handleDec(id)}
//             className="btn btn-danger"
//           >
//             remove
//           </button>
//           <DinamicCounter />
//         </>
//       ) : (
//         ""
//       )}
//     </div>
//   </div>
// </div>
// );}


    

  
  















 // const [count, setCount] = useState(0);
  // const navigate = useNavigate();
  // const { cartCount, setCartCount } = useContext(productsContext);

  // const handleInc = () => {
  //   setCount(count + 1);
  //   setCartCount(cartCount + 1);
  // };
  // const handleDec = () => {
  //   setCount(count - 1);
  //   setCartCount(cartCount - 1);
  // };
  // const navigateToDetails = (id) => {
  //   navigate(`${id}`);
  // };












    // return (
    //   <Card className="d-flex flex-column d-justify-content-between" style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="https://img.asmedia.epimg.net/resizer/8VsXptNaqJWt2kU2GbTqnc7kuPE=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/PG34HXQSSJBRBDRU2O7IQDTOTI.jpg" />
    //   <Card.Body className="h-100 d-flex flex-column d-justify-content-between">
    //     <Card.Title>title:{this.props.title.split(" ",5).join(" ")+"...."}</Card.Title>
    //     {/* <Card.Text>text:{this.props.desc}</Card.Text> */}
    //     <Card.Text>
    //     price:{this.props.price}
    //     </Card.Text>
    //     <div className="d-flex justify-content-between">
    //     <Button  onClick={this.handleInc} className="btn btn-success" style={{width:this.state.count ? "" : "100%"}}>add</Button>
    //     {this.state.count ? (
    //       <>
    //       <span>{this.state.count}</span>
    //       <Button onClick={this.handleDec } className="btn btn-danger" >remove</Button>
          
          
    //       </>
    //     ):(""

    //     )}
    //     </div>
        
    //   </Card.Body>
    // </Card>

    // );

