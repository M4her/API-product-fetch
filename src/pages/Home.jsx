import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [singleProduct, setProduct] = useState("");

  const handleClick = ()=>{
    
  }

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProduct(res.data.products[1+2]);

        console.log(res.data.products[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[700px] h-[400px] flex items-center  bg-gray-400">
        <img src={singleProduct.thumbnail} alt="img" />
        <h2 className="text-3xl text-green-400 font-bold">
          {singleProduct.title}
        </h2>
      </div>
    </div>
  );
};

export default Home;
