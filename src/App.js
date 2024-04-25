import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  //Api = https://fakestoreapi.com/products
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => console.error("err"));
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {products.map((products) => (
        <div key={products.id}>
          {Object.keys(products).map((key) => (
            <p> test {JSON.stringify(products[key])}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
