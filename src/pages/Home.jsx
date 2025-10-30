import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [singleProduct, setProduct] = useState("");



  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProduct(res.data.products[0]);

        console.log(res.data.products[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[700px] h-[400px] flex items-center  ">
        <img src={singleProduct.images} alt="img" />
        <h2 className="text-3xl text-green-400 font-bold">
          {singleProduct.title}
          <br />

          <br />
          {singleProduct.price}
        </h2>
      </div>
    </div>
  );
};

export default Home;
