import React, { useEffect, useRef, useState } from "react";

export default function DinamicCounter() {
  const [count, setCount] = useState(0);
  const stophandler = () => {
    clearInterval(myInt.current);
  };
  const myInt = useRef(null);
  useEffect(() => {
    myInt.current = setInterval(() => {
      setCount((prevState) => prevState + 1);
      console.log("intreval is working");
    }, 2000);
    return () => {
      clearInterval(myInt.current);
    };
  }, []);

  return (
    <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-between">
        {count}
        </div>
        
      {/* <button className="btn btn-primary" onClick={stophandler}>
      clear
      </button> */}
    </div>
  );
}