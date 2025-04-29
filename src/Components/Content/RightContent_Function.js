import React, { useState, useEffect } from "react";
import ShowCard from "./showCard";

const RightContent_Function = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api-products-2-ottk.onrender.com/api/products')
    // fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products')
      .then(response => response.json())
      .then(data => {
        const filteredData = data.map(item => ({
          name: item.name,
          avatar: item.avatar
        }));
        setProducts(filteredData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div id="right-content">
        <h2>Product</h2>
        <div id="products">
          {products.map((product) => (
            <ShowCard avatar={product.avatar} name={product.name} />
          ))}
          <div style={{ clear: 'both' }} />
        </div>
        <div style={{ clear: 'both' }} />
      </div>
      <div style={{ clear: 'both' }} />
    </div>
  );
};

export default RightContent_Function;
